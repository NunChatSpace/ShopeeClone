const mongoose = require('mongoose');
const recommendModel = require('../models/recommendModel');

const model = mongoose.model("recommendMenu", recommendModel);
module.exports = {
    model
};