const model = require('../models/home.model');
const mongoose = require('mongoose');
const Home = mongoose.model('Home', model.schema);


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

var create = (body) => {


    let home = new Home(
        {
            address: body.address,
            location: body.location,
            type: body.type
        }
    );

    return new Promise((resolve, reject) => {
        home.save((err, results) => {
            if (err) {
                console.log('An error ocurred creating Home :(  => %s', err.message);
                reject(new Error(err));
                return;                
            }
            resolve(results);
            return;            
        })
    })
}

var find = (id) => {
    return new Promise((resolve, reject) => {
        model.findById(id).exec((err, results) => {
            if (err) {
                console.log('An error ocurred :(  => %s', err.message);
                reject(new Error(err));
                return;
            }

            resolve(results);
            return;
        })
    })
}

var remove = (id) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndRemove(id).exec((err, results) => {
            if (err) {
                console.log('An error ocurred removing a home :(  => %s', err.message);
                reject(new Error(err));
                return;
            }

            resolve(results);
            return;
        })
    })
}

var update = (id, body) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(id, body, { new: true }).exec((err, results) => {
            if (err) {
                console.log('An error ocurred updating a home :(  => %s', err.message);
                reject(new Error(err));
                return;
            }

            resolve(results);
            return;
        })
    })
}

module.exports.getAll = getAll;
module.exports.find = find;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;