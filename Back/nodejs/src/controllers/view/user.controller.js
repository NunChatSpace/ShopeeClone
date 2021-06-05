const { model } = require('../../Database/user');
const data = require('../../Database/data/user')


const getUserData = async () => {
    var cursor = await model.find({});
    return cursor;
}

const initUserData = async () => {
    await clearUserData()
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data.userData, function (err, docs) {
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
const clearUserData = async () => {
    var val = await getUserData();
    if (val) {
        await model.collection.deleteMany({});
    }
}


module.exports = {
    getUserData,
    initUserData,
    clearUserData
}