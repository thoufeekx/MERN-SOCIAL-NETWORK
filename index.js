const express = require("express");

const {body} = require("express-validator");
const expressValidator = require("express-validator")
const morgan = require("morgan");

const server = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");


//middleware
server.use(morgan("dev"));

//postRoutes act like a middleware
const  postRoutes = require('./routes/post')

mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


const port = process.env.PORT || 8000;
server.use(expressValidator());
server.use(bodyParser.json());
server.use("/",postRoutes);



server.listen(port);


