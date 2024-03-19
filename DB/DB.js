const dotenv = require('dotenv');
dotenv.config();

// const sql = require("mssql/msnodesqlv8");
let config = {
    driver: process.env.dbDriver,
    connectionString:"Driver={SQL Server};Server={localhost\\SQLEXPRESS};Database={ecartdb};Trusted_Connection={yes};",
    
  };

  
module.exports=config;