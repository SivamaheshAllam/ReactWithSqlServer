let express=require('express');
let router=express.Router();
const moment = require("moment-timezone");
let bcrypt=require('bcrypt')
var sql = require("mssql/msnodesqlv8");
// let cors = require("cors");
let multer = require("multer");
let connection=require('../DB/DB');
let jwt=require('jsonwebtoken');
const verifyToken = require('../Middlewares/JWTAccessClass');

sql.connect(connection, (err) => {
    if (err) {
      console.log("Unable to connect ", err);
    } else {
      console.log("connected");
    }
  });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
const upload = multer({ storage: storage });


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
                console.error(err);
                return res.status(500).json({ status: "Failure", error: "Internal Server Error" });
            }
            res.status(200).json({ status: "Success", data: result });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Failure", error: "Internal Server Error" });
    }
});


router.post('/login', upload.none(), async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;
    const sqlQuery = `SELECT * FROM tblregistration WHERE email = '${loginEmail}'`;

    sql.query(sqlQuery, async (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ status: 'Failed', data: 'Internal Server Error' });
      }

      if (result.recordset.length === 0) {
        return res.status(400).json({ status: 'Failed', data: 'Email id not Found' });
      }

      const isValidPassword = await bcrypt.compare(loginPassword, result.recordset[0]?.password);
      if (isValidPassword) {
        const token = jwt.sign({ userId: result.recordset[0]?.id }, 'M416', { expiresIn: '1h' });
        console.log(token)
        return res.status(200).json({ status: 'Success', data: {data:result.recordset[0], token:token} });
      } else {
        return res.status(400).json({ status: 'Failed', data: 'Incorrect Password' });
      }
    });
  } catch (error) {
    console.error('Error in login route:', error);
    return res.status(500).json({ status: 'Failed', data: 'Internal Server Error' });
  }
});

router.get('/employees',verifyToken, (req, res)=>{
res.json("Employees data")
})
module.exports=router;