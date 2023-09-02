import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        uniqe: true,
        required:true
    },
    email:{
        type: String,
        uniqe: true,
        required: true
    },
    password:{
        type: String,
        required:true
    },
}, {timestamps:true})

export default mongoose.models.User || mongoose.model("User", userSchema);