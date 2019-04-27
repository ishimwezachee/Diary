const express = require('express');
const mongoose = require('mongoose');
const passport =require ("passport");
const keys = require('./config/keys')

// Initialize express

const app = express();

// configure express to parsejson 

app.use(express.json());

// connect ro mongodb

mongoose.connect(keys.mongoURI,{
    useNewurlparse:true,
    userCreateIndex: true,
})
.then(()=>{
    console.log('mogoDB connected')
})
.catch(err =>{
    console.log('err');
})

// set up this.props.
const port = process.env.port || 3500;
app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
})