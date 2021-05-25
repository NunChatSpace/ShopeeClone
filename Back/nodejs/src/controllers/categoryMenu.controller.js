const { model } = require('../Database/categoryMenu')
const data = require('../Database/data/categoryMenu.json')

const getCategoryMenu = async () => {
    var cursor = await model.find();
    return cursor;
}

const initCategoryData = async () => {
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
const clearCategoryData = async () => {
    var val = await getCategoryMenu();
    
    if (val) {
        model.collection.deleteMany({});
    }
}

module.exports = {
    getCategoryMenu,
    initCategoryData,
    clearCategoryData
}