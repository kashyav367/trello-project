import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : String,
    password : String
}, {timestamps : true})

const userModel = mongoose.model("users", userSchema)
console.log("userModel", userModel )

export default userModel;