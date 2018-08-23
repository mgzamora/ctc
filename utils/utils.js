const mongoose = require('mongoose');

var isValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports.isValidId = isValidId;