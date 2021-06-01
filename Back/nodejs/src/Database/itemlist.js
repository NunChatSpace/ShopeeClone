const mongoose = require('mongoose');
const itemlistModel = require('../models/itemlistModel');

const model = mongoose.model("itemlist", itemlistModel);
module.exports = {
    model
};