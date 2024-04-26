let express = require("express");
// let mssql=require('mssql')
let cors = require("cors");
let bodyParser = require("body-parser");
let RegistrationController=require('../Server/Routes/RegistrationController')
let EmployeeController=require('./Routes/EmployeeController')

let app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use("/uploads", express.static("uploads"));

app.use('/',RegistrationController )
app.use('/EmployeeController', EmployeeController)

app.listen(4444, () => {
  console.log("listening to port 4444");
});
