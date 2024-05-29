const mongoose = require('mongoose');
const { Person } = require('./models/Person');

async function start(){
    const connectionString = 'mongodb://localhost:27017/test';

    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected!')

    const myPerson = new Person({
        name: 'Peter',
        age: 27
    });

    await myPerson.save();

    
    const document = await Person.find({})
    console.log(document)
}
start();