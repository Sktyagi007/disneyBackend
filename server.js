
const  express = require("express")
const cors = require("cors");
//npm i cookie-parser
const cookieParser = require("cookie-parser");

var jwt = require("jsonwebtoken");
const secretKey = "esjtkl45758resghkls"

const app = express();

const authRouter = require("./src/routes/authRoutes");
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//signup input:
//name,
//password
//confirm password
//address
//email


app.use("/api/v1/auth",authRouter);

app.listen(3001,function(){
    console.log("server started at 3001");
})