import mongoose from "mongoose"
const userSchema = new moongoose.Schema(
    //data fields
    {//object define se full power unlock mongoose ki
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        password: {
            type: String,
            unique: true,
            //if not true show msg
            required: [true, "password must be 6 character long"]

        }
    }
)
//mongoose. model ek schema banao User ka model banao or userSchema ke basis ke upr banao
export const User = mongoose.model("User", userSchema)