const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

personSchema.methods.sayHello = function(){
return `${this.name} says hello!`

}
const Person = mongoose.model('Person', personSchema);

module.exports = { Person }; 