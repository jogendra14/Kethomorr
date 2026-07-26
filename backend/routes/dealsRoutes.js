const express = require("express");
const {protect} = require('../middleware/authMiddleware.js');
const {admin} = require('../middleware/adminMiddleware.js');
const { getDeals, getDealsById, createDeals, updateDeals, deleteDeals } = require('../controller/dealsController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.route('/').get(getDeals).post(protect, admin, upload.single("image"), createDeals);
router.route('/:id').get(getDealsById).put(protect, admin, upload.single("image"), updateDeals).delete(protect, admin, deleteDeals);

module.exports = router;