const { model } = require('../../Database/itemlist')
const data = require('../../Database/data/itemlist')

const getItemList = () => {
    var promise = new Promise((resolve, reject) => {
        model.find({}).then((result, err) => {
            if (err) {
                resolve(err);
            } else {
                resolve(result);
            }
        });
    })
    return promise;
}

const initItemList = async () => {
    await clearItemList()
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data.itemListData, function (err, docs) {
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
        console.log("clearItemList")
        await model.collection.deleteMany({});
    }
}

module.exports = {
    getItemList,
    initItemList,
    clearItemList
}