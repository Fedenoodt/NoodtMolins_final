const mongoose = require("../config/mongodb")

const DetailsSchema = mongoose.Schema({
    nombre: String,
    precio: Number, 
    categoria: String, 
    descripcion: String, 
});

const DetailsModel = mongoose.model("detalles", DetailsSchema);

module.exports = DetailsModel