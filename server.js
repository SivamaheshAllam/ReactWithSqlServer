let express = require("express");
// let mssql=require('mssql')
let cors = require("cors");
let bodyParser = require("body-parser");
let registrationController=require('../Server/Routes/RegistrationController')

let app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use("/uploads", express.static("uploads"));

app.use('/',registrationController )

app.listen(4444, () => {
  console.log("listening to port 4444");
});
