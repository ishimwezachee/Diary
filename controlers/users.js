// load Models

const User = require("../models/User");

module.exports={
    // test route;

    test:(req,res)=>{
        res.json({msg:"users routes works"});
    },
}