const { model } = require('../Database/advertisement')
const data = require('../Database/data/advertisement')

const getAdvertisement = async () => {
    var cursor = await model.find();
    return cursor;
}

const initAdvertisementData = async () => {
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
        model.collection.deleteMany({});
    }
}

module.exports = {
    getAdvertisement,
    initAdvertisementData,
    clearAdvertisementData
}