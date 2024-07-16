const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const urlRoutes = require("./routes/index");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("error in connecting to db");
  });
  app.use('/',urlRoutes);
  app.get('*',(req,res)=>{
    res.send(404);
  });
  app.listen(port, () => {
    console.log("server is running on port " + port);
    });
