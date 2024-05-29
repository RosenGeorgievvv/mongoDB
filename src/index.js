const mongoose = require('mongoose');
const {Person} = require('./models/Person');

async function start(){
    const connectionString = 'mongodb://localhost:27017/test';

    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected!')
}
start();