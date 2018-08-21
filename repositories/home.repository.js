const model = require('../models/home.model');


var getAll = (requestData) => {

    var params = requestData ? requestData.params : undefined;
    var orderBy = requestData ? requestData.orderBy : { _id: 1 };
    var relations = requestData ? requestData.get : '';
    
    return new Promise((resolve, reject) => {
        var query = model.find(params).sort(orderBy);

        query.exec((err, results) => {
            if (err) {
                console.log('An error ocurred :(  => %s', err.message);
                reject(new Error(err));
                return;
            }

            resolve(results);
            return;
        })
    });
};

module.exports.getAll = getAll;