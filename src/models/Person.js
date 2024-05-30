const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
    tel: String,
    email: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contacts: contactInfoSchema,
});
personSchema.methods.sayHello = function(){
    return `${this.name} says hello!`
}
const Person = mongoose.model('Person', personSchema);

module.exports = { Person }; 