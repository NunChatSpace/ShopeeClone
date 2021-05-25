const {model} = require('../Database/recommendMenu')
const data = require('../Database/data/recommendMenu.json')

const getRecommendMenu = async () => {
    var data = await model.collection.find({}).toArray(); 
    return data;
}

const initData = () => {
    model.collection.insertMany(data, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });
}

module.exports = {
    getRecommendMenu,
    initData
}