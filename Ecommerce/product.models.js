import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    description: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    productImage: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        unique: true,
        default: 0,
        required: true
    },
    stock: {
        type: Number,
        unique: true,
        default: 0,
        required: true
    },
    // reference
    category: {
        type: mongoose.Schema.Types.objectId,
        ref: "Category",
        required: true
    }

}, { timestanps: true })
export const Product = mongoose.model("Product", productSchema)