const express = require("express");
const router = express.Router();

const {getAllProducts, getAllProductsTesting, postProducts, deleteProducts, putProducts,} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/post").post(postProducts);
router.route("/delete/:id").delete(deleteProducts);
router.route("/put/:id").put(putProducts);

module.exports = router;