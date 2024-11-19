const mongoose = require('mongoose');

const local = "mongodb+srv://daom5400:WOsAfkccgb5hMS9d@cluster0.t5zr4.mongodb.net/Lab5_MD19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
