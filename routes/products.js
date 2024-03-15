var express = require("express");
var router = express.Router();

const productosController = require("../controllers/productsController");

router.get("/", productosController.getAll);
router.get("/:id", productosController.getById);
router.post("/", productosController.create);
router.put("/:id", productosController.update);
router.delete("/:id", productosController.remove);

module.exports = router;