const Product = require("../models/productModel");


const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const getProduct = async (req, res) => {
    try {
      const products = await Product.find({});
      res
        .status(200)
        .json(products.filter((product) => product.isArchived === false));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const getProductsById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        _id: id,
        isArchived: false,
      });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find any product by ${id}` });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, {
        $set: { isArchived: true },
      });
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find any product by ${id}` });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

module.exports ={
    createProduct,
    getProduct,
    getProductsById,
    updateProduct,
    deleteProduct
}

