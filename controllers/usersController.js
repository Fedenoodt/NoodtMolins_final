const UsersModel = require("../models/usersModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const create = async function (req, res, next) {
  try {
    console.log(req.body);
    const user = new UsersModel( req.body );
    const document = await user.save();
    res.status(201).json(document);
  } catch (e) {
    console.log(e);
  }
};

const login = async function (req, res, next) {
  try {
    const user = await UsersModel.findOne({email:req.body.email});
    if (!user) {
      return res.status(401)
      .json({
        message: "El usuario al que desea ingresar, no existe.",
      });
    }
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401)
      .json({
        message: "Datos de ingreso incorrectos.",
      });
    }

    const token = jwt.sign({ userId: user._id }, "123", { expiresIn: "1h" })    
    res.status(201).json(token);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  login,
};