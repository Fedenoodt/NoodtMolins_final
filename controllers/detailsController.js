const DetailsModel = require("../models/detailsModel");

const getAll = async function (req, res, next) {
  try {
    const documents = await DetailsModel.find();
    res.status(200).json(documents);
  } catch (e) {}
};

const getById = async function (req, res, next) {
  try {
    const document = await DetailsModel.findById(req.params.id);
    res.status(200).json(document);
  } catch (e) {}
};

const create = async function (req, res, next) {
  try {
    console.log(req.body);
    const detalle = new DetailsModel({
      nombre: req.body.nombre,
      precio: req.body.precio,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
    });
    const document = await detalle.save();
    res.status(201).json(document);
  } catch (e) {
    console.log("🚀 ~ create ~ e:", e);
  }
};

const update = async function (req, res, next) {
  try {
    await DetailsModel.updateOne({ _id: req.params.id }, req.body);
    res.status(204);
  } catch (e) {
    console.log("🚀 ~ create ~ e:", e);
  }
};

const remove = async function (req, res, next) {
  try {
    await DetailsModel.deleteOne({ _id: req.params.id });
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