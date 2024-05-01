let express=require('express');
let router=express.Router();
const moment = require("moment-timezone");
let bcrypt=require('bcrypt')
var sql = require("mssql/msnodesqlv8");
// let cors = require("cors");
let connection=require('../DB/DB');
let upload= require('../Middlewares/Upload')
let jwt=require('jsonwebtoken');
let logger= require('../Logs/Logger')

sql.connect(connection, (err) => {
    if (err) {
      console.log("Unable to connect ", err);
    } else {
      console.log("connected");
    }
  });

router.post("/registration", upload.none(), async (req, res) => {
    try {
        const { username, email, password, repeatpassword, termsagreed } = req.body;

        if (password !== repeatpassword) {
            return res.json({
                status: "Failure",
                error: "Password and Repeat Password do not match",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const currentDateIST = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");

        let termsAgreedValue = 0;
        if (termsagreed === true) {
            termsAgreedValue = 1;
        }
        const query = `
        INSERT INTO tblregistration(username, email, password,repeatpassword, termsagreed, createddate)
        VALUES ('${username}', '${email}', '${hashedPassword}','${repeatpassword}' ,${termsAgreedValue}, '${currentDateIST}')
      `;

        sql.query(query, (err, result) => {
            if (err) {
                logger.error(`Error in user registration: ${err.message}`);
                return res.status(500).json({ status: "Failure", error: "Internal Server Error" });
            }
            logger.info(`User registered successfully: ${username}`);
            res.status(200).json({ status: "Success", data: result });
        });
    } catch (error) {
        logger.error(`Error in user registration: ${error.message}`);
        res.status(500).json({ status: "Failure", error: "Internal Server Error" });
    }
});

router.post('/CheckEmailExists/:email', upload.none(), async (req, res) => {
  try {
    const email = req.params.email; 

    const sqlQuery = `SELECT * FROM tblregistration WHERE email ='${email}'`;
    sql.query(sqlQuery, (err, result) => {
      if (err) {
        res.status(500).json({ status: "Failed", details: err });
      } else {
        if (result && result.recordset.length > 0) {
          res.json({ status: 'Success', details: "Email already exists", responseCode:false });
        } else {
          res.json({ status: "Success", details: "Email available", responseCode:true});
        }
      }
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", details: error });
  }
});
router.post('/login', upload.none(), async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;
    const sqlQuery = `SELECT * FROM tblregistration WHERE email = '${loginEmail}'`;

    sql.query(sqlQuery, async (err, result) => {
      if (err) {
        logger.error(`Error in user Login: ${err.message}`);
        return res.status(500).json({ status: 'Failed', data: 'Internal Server Error' });
      }

      if (result.recordset.length === 0) {
        logger.error(`Error in user Login: Email id not Found`);
        return res.status(400).json({ status: 'Failed', data: 'Email id not Found' });
      }

      const isValidPassword = await bcrypt.compare(loginPassword, result.recordset[0]?.password);
      if (isValidPassword) {
        const token = jwt.sign({ userId: result.recordset[0]?.id }, 'M416', { expiresIn: '1h' });
        logger.info(`User registered successfully:${result.recordset[0].username}`)
        return res.status(200).json({ status: 'Success', data: {data:result.recordset[0], token:token} });
      } else {
        return res.status(400).json({ status: 'Failed', data: 'Incorrect Password' });
      }
    });
  } catch (error) {
    logger.error(`Error in login route:${error}`);
    return res.status(500).json({ status: 'Failed', data: 'Internal Server Error' });
  }
});


module.exports=router;