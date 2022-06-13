const mongoose = require('mongoose')


const UserSChema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSChema)
module.exports = UserModel;