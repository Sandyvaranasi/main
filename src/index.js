const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const route = require('./routes/route');
const dotenv = require('dotenv');

app.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
.then(()=>console.log("Mongo DB is connected"))
.catch(err=> console.log(err))

app.use('/',route);

app.listen(process.env.PORT||3000,function(){
    console.log("server active on port "+process.env.PORT||3000)
});