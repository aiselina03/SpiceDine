import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import 'dotenv/config'
import { userRouter } from "./src/Router/UserRouter.js";
import { authRouter } from "./src/Router/AuthRouter.js";
import { menuRouter } from "./src/Router/MenuRouter.js";
import { MenuModel } from "./src/Model/MenuModel.js";
import { FaqRouter } from "./src/Router/FaqRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/image", express.static('./public/image'))
app.use("/api/users", userRouter)
app.use("/api/menu", menuRouter)
app.use('/api/faq' , FaqRouter)
app.use("/", authRouter)


const categorySchema = new Schema({
    categoryName: String,

});
export const CategoryModel = mongoose.model("CategoryModel", categorySchema);


app.get('/category', async (req, res) => {
    try {
        const products = await CategoryModel.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/category', async (req, res) => {
    try {
        const { categoryName } = req.body;
        const newProducts = new CategoryModel({ categoryName });
        await newProducts.save();
        res.json(newProducts);
    } catch (error) {
        res.send(error.message);
    }
})

app.get('/menuByCategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const products = await MenuModel.find({ categoryId: id });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/menuWithCategory', async (req, res) => {
    try {
        const products = await MenuModel.find().populate("categoryId")
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose
    .connect(process.env.DB_SECRET_KEY)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
