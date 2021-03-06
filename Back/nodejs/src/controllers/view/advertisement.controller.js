const { model } = require('../../Database/advertisement')
const data = require('../../Database/data/advertisement')

const getAdvertisement = async () => {
    var cursor = await model.find({});
    return cursor;
}

const initAdvertisementData = async () => {
    await clearAdvertisementData();
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data.dataAdvertisement, function (err, docs) {
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
const clearAdvertisementData = async () => {
    var val = await getAdvertisement();
    
    if (val) {
        await model.collection.deleteMany({});
    }
}

module.exports = {
    getAdvertisement,
    initAdvertisementData,
    clearAdvertisementData
}