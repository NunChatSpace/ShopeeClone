const mongoose = require('mongoose');
const itemlistModel = require('../models/itemlistSchema');

const model = mongoose.model("itemlist", itemlistModel);
module.exports = {
    model
};