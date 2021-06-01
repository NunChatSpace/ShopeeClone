const mongoose = require('mongoose');

const itemlistSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    },
    tagsEnum: {
        type: [Number]
    },
    imgCount: {
        type: Number,
        min: 1,
        max: 10,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    soleCount : {
        type: Number,
        require: true
    },
    url: {
        type: String,
        require: true
    }
});

module.exports = itemlistSchema;