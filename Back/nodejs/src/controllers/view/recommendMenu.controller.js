const { model } = require('../../Database/recommendMenu')
const data = require('../../Database/data/recommendMenu.json')

const getRecommendMenu = async () => {
    var cursor = await model.find({});
    return cursor;
}

const initRecommendData = async () => {
    await clearRecommendData()
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
const clearRecommendData = async () => {
    var val = await getRecommendMenu();
    if (val) {
        console.log("clearRecommendData")
        await model.collection.deleteMany({});
    }
}

module.exports = {
    getRecommendMenu,
    initRecommendData,
    clearRecommendData
}