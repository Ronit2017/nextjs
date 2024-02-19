import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , "please provide a username"],
        unique: true,
    },
    enail: {
        type: String,
        required:[true , "please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true , "please provide a password"],
    },
    isVerfied: {
        type:Boolean,
        default:false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.users || mongoose.model("Users" ,userSchema);


export default User;
