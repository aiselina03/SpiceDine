import { UserModel } from "../Model/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getUser =  async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id);
        if (decoded.username !== user.username && decoded.role==="user") {
            return res.send("you don't have access")
        }
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}

export const createUsers = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const newUser = new UserModel({username, email, password})
        await newUser.save()
        res.status(200).json('User elave olundu!')
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const  {username, email, password}  = req.body
        const user = await UserModel.findByIdAndUpdate(id,{username, email, password});
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}
export const deleteUser =  async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findByIdAndDelete(id);
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}