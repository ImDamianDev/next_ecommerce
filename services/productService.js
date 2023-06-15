import Product from "models/productModel";

const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error("Error retrieving products from database");
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error(`Error retrieving product with id ${id} from database`);
  }
};

const createProduct = async (newProduct) => {
  console.log("new product - productService");
  console.log(newProduct);
  try {
    const product = new Product(newProduct);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    throw new Error("Error creating product in database");
  }
};

const updateProductById = async (id, updatedProduct) => {
  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    return product;
  } catch (error) {
    throw new Error(`Error updating product with id ${id} in database`);
  }
};

const deleteProductById = async (id) => {
  try {
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (error) {
    throw new Error(`Error deleting product with id ${id} from database`);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
