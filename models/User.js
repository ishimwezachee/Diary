const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

// create a schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

// Hash passwords before save

userSchema.pre("save",async function (next){
    try{
        // generat a salt;
        const salt=await bcrypt.genSalt(10);
        // generate hash reseign hashed version with orginal plain text word;
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch(err){
        next(err);
    }
})

module.exports = User = mongoose.model("user",userSchema);