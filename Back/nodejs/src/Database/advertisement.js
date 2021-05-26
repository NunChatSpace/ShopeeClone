const mongoose = require('mongoose');
const advertisementModel = require('../models/advertisementModel');

const model = mongoose.model("advertisement", advertisementModel);
module.exports = {
    model
};