const verifyToken = require("../Middlewares/JWTAccessClass")
let express=require('express')
const router=express.Router();
var sql = require("mssql/msnodesqlv8");

router.get('/employees',verifyToken, async (req, res)=>{
    try {
       let query="select * from tblregistration"
       sql.query(query, (err, result)=>{
        if(err){
            res.json({status:"Failed", details:err})
        }
        else{
            res.json({status:"Success", details:result.recordsets[0]})
        }
       })
    } catch (error) {
        res.json({status:"Failed", details:error})
        console.log(error)
    }
    })

module.exports=router;