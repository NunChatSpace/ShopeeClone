const mongoose = require('mongoose');
const data = require('./data/recommendMenu.json');
const recommendMenuSchema = require('../models/recommendModel');

const model = mongoose.model("recommendMenu", recommendMenuSchema);
module.exports = {
    model
};