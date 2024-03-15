var express = require("express");
var router = express.Router();

const detailsController = require("../controllers/detailsController");

router.get("/", detailsController.getAll);
router.get("/:id", detailsController.getById);
router.post("/", detailsController.create);
router.put("/:id", detailsController.update);
router.delete("/:id", detailsController.remove);

module.exports = router;