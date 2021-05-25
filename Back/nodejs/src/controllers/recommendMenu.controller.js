const { model } = require('../Database/recommendMenu')
const data = require('../Database/data/recommendMenu.json')

const getRecommendMenu = async () => {
    var data = await model.collection.find({}).toArray();
    return data;
}

const initData = async () => {
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data, function (err, docs) {
            if (err) {
                resolve(err);
            } else {
                resolve(docs);
            }
        });
    })
    return promise;
}

// Setting environment for test
const clearData = () => {
    model.collection.deleteMany({});
}

module.exports = {
    getRecommendMenu,
    initData,
    clearData
}