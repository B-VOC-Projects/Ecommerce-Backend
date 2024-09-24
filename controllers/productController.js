const Product = require('../models/Product');

// Get All Products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Create New Product (Admin Only)
const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = new Product({
    name,
    price,
    description,
    image,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = { getProducts, createProduct };
