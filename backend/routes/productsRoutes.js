const express = require("express");
const {protect} = require('../middleware/authMiddleware.js');
const {admin} = require('../middleware/adminMiddleware.js');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getDeals } = require('../controller/productController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, upload.array("images", 5), createProduct);
router.route('/:id').get(getProductById).put(protect, admin, upload.array("images", 5), updateProduct).delete(protect, admin, deleteProduct);


module.exports = router;