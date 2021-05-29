const mongoose = require('mongoose');
const userModel = require('../models/userModel');

const model = mongoose.model("user", userModel);
module.exports = {
    model
};