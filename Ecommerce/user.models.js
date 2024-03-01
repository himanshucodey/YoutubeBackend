import moongoose from "mongoose";
// user schema
const userSchema =new moongoose.Schema({
    username:{
        type : String,
        unique: true,
        required: true,
        lowercase: true
    },
    email:{
        type : String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type : String,
        unique: true,
        required: true
    }
},{timestamps: true})
export const  User = moongoose.model("User",userSchema)