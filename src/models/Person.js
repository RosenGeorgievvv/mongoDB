const mongoose = require('mongoose');

const schema = new.mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('Person', schema);

module.exports = {Person}; 