const express = require("express");

const {
    createProduct,
    getProduct,
    getProductsById,
    updateProduct,
    deleteProduct
} = require("../controllers/productControllers");

const router = express.Router();

router.use(express.json());

router.post("/",createProduct );

router.get("/",getProduct );

router.get("/:id",getProductsById);

router.put("/:id",updateProduct);

router.delete("/:id/archive",deleteProduct);

module.exports = router;
