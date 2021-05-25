const mongoose = require('mongoose');
const categoryModel = require('../models/categoryModel');

const model = mongoose.model("categoryMenu", categoryModel);
module.exports = {
    model
};