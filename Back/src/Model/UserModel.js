import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
});
export const UserModel = mongoose.model("UserModel", userSchema);