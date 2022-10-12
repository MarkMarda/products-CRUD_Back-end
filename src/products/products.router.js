const router = require("express").Router();

const productsServices = require("./products.services");

router.get("/", productsServices.getAllProducts);

router.post("/", productsServices.postNewProduct);

router.get("/:id", productsServices.getProductById);

router.patch("/:id", productsServices.patchProduct);

router.put("/:id", productsServices.putProduct);

router.delete("/:id", productsServices.deleteProduct);

module.exports = router;