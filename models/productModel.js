import { Schema, model, models } from "mongoose";

// Definir el schema de producto
const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    categories: { type: Array },
    size: { type: String, default: "N/A" },
    color: { type: String, default: "N/A" },
    quantity: { type: Number, default: 0 },
    available: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    freeShipping: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Crear el modelo de producto usuario a partir del schema
const Product = models.Product || model("Product", ProductSchema);

export default Product;
