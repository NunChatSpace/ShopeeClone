const { model } = require('../../Database/itemlist')
const data = require('../../Database/data/itemlist')
// const fs = require('fs')
// const constant = require('../../assets/constant');
// const queryString = require('querystring');

const getItemList = (filter) => {
    var promise = new Promise((resolve, reject) => {
        if(filter == {}) {
            reject({
                status: 'error',
                message: 'invalid user id'
            })
        }
        model.findOne(filter, (err, doc) => {
            if (err) {
                resolve(err);
            } else {
                // if(doc) {
                //     var pl = getPreviewList(filter.id);
                //     var temp = JSON.stringify(doc);
                //     var data = JSON.parse(temp);
                //     data['previewList'] = pl;
                //     resolve(doc);
                // } else {
                //     resolve(doc);
                // }
                resolve(doc);
            }
        })
    })
    return promise;
}

// const getPreviewList = (id) => {
//     if(id == undefined)
//     {
//         return ["N/A"]
//     }
//     var files = fs.readdirSync(process.cwd() + '/src/assets/static/item/' + id);
//     var staticPathImgs = []

//     if(files.length == 0) {
//         return ["N/A"]
//     }

//     files.forEach(file => {
//         staticPathImgs.push(constant.HOSTNAME + "/static/item/" + id + "/" + file);
//     })


//     return staticPathImgs
// }

const initItemList = async () => {
    await clearItemList()
    var promise = new Promise((resolve, reject) => {
        model.collection.insertMany(data.itemListData, function (err, docs) {
            if (err) {
                console.log("err \n", err)
                resolve(err);
            } else {
                console.log("docs \n", docs)
                resolve(docs);
            }
        });
    })
    return promise;
}

const clearItemList = async () => {
    var val = await getItemList({});
    if (val) {
        await model.collection.deleteMany({});
    }
}


module.exports = {
    getItemList,
    initItemList,
    clearItemList
}