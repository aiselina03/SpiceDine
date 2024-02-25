import { MenuModel } from "../Model/MenuModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await MenuModel.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await MenuModel.findById(id);
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price, ingredient, categoryId, description } = req.body;

        console.log(req.body);
        const newProducts = new MenuModel({ name, image: "http://localhost:3000/image/" + req.uploadFileName, price, ingredient, categoryId, description });
        await newProducts.save();
       return res.json({newProducts});
    } catch (error) {
        res.send({message:error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, ingredient, categoryId, description } = req.body
        const products = await MenuModel.findByIdAndUpdate(id, { name, image: "http://localhost:3000/image/" + req.uploadFileName, price, ingredient, categoryId, description });
        res.json(products)
    } catch (error) {
        res.send(error.message);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await MenuModel.findByIdAndDelete(id);
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
}
