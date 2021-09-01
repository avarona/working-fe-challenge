const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.get("/", product.getAllProducts);
router.get("/:id", product.getProduct);

module.exports = router;
