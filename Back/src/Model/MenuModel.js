import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    name: String,
    image: String,
    price:Number,
    ingredient: String,
    categoryId: { type: Schema.Types.ObjectId, ref: 'CategoryModel' },
    description: String

});

export const MenuModel = mongoose.model("MenuModel", menuSchema);