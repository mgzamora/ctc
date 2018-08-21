const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var room = require('./home');
// var person = require('./person');

let HomeSchema = new Schema({
    address: {type: String, required: true},
    type: {type: String, required: true},
    // rooms: [room.Schema],
    // tenants: [person.Schema]
},
{
    timestamps: true
});

module.exports = mongoose.model('home', HomeSchema, 'home');