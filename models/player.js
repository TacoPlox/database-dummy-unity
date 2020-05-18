const mongoose = require('mongoose');

let playerSchema = new mongoose.Schema({
    name: String
});

let Player = mongoose.model('Player', playerSchema);

module.exports = {Player};