const mongoose = require("../config/mongodb")
const bcrypt = require("bcrypt")

const UsersSchema = mongoose.Schema({
    name: String, 
    email: String, 
    password: String, 
});

UsersSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const UsersModel = mongoose.model("usuarios", UsersSchema);

module.exports = UsersModel