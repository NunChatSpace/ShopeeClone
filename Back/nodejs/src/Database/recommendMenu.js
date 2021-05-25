const mongoose = require('mongoose')
const data = require('./data/recommendMenu.json')

const recommendMenuSchema = new mongoose.Schema({
    image: {
        type: String
    },
    text: {
        type: String
    },
    url: {
        type: String
    }
});

// const init = function () {
//     var db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function () {
//         var model = mongoose.model('recommendMenu', recommendMenuSchema);
//         model.collection.insertMany(data, function (err, docs) {
//             if (err) {
//                 return console.error(err);
//             } else {
//                 console.log("Multiple documents inserted to Collection");
//             }
//         });
//     });
// }

const model = mongoose.model("recommendMenu", recommendMenuSchema);
module.exports = {
    model
};