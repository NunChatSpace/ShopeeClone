const mongoose = require('mongoose')

const advertisementSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = {
    advertisementSchema
}