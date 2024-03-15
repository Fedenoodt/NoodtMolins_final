const ProductsModel = require("../models/productsModel");

const getAll = async function (req, res, next) {
  try {
    const documents = await ProductsModel.find();
    res.status(200).json(documents);
  } catch (e) {}
};

const getById = async function (req, res, next) {
  try {
    const document = await ProductsModel.findById(req.params.id);
    res.status(200).json(document);
  } catch (e) {}
};

const create = async function (req, res, next) {
  try {
    console.log(req.body);
    const producto = new ProductsModel({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      status: req.body.status,
    });
    const document = await producto.save();
    res.status(201).json(document);
  } catch (e) {
    console.log("🚀 ~ create ~ e:", e);
  }
};

const update = async function (req, res, next) {
  try {
    await ProductsModel.updateOne({ _id: req.params.id }, req.body);
    res.status(204);
  } catch (e) {
    console.log("🚀 ~ create ~ e:", e);
  }
};

const remove = async function (req, res, next) {
  try {
    await ProductsModel.deleteOne({ _id: req.params.id });
    res.status(204);
  } catch (e) {
    console.log("🚀 ~ create ~ e:", e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};