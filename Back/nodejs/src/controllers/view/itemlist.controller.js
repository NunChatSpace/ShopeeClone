const { model } = require('../../Database/itemlist')
const data = require('../../Database/data/itemlist')

const getItemList = async () => {
    var cursor = await model.find();
    return cursor;
}

const initItemList = async () => {
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data.itemlist, function (err, docs) {
            if (err) {
                resolve(err);
            } else {
                resolve(docs);
            }
        });
    })
    return promise;
}


const clearItemList = async () => {
    var val = await getItemList();
    if (val) {
        model.collection.deleteMany({});
    }
}

module.exports = {
    getItemList,
    initItemList,
    clearItemList
}