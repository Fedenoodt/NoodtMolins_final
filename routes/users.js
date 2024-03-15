var express = require("express");
var router = express.Router();

const UsersController = require("../controllers/usersController");

router.post("/", UsersController.create);
router.post("/login", UsersController.login);

module.exports = router;