const mongoose = require('../DatabaseHandler')

const PlayerSchema = new mongoose.Schema({
name:String,
age: Number,
position : String,
club : String,
nationality : String,

})

module.exports = mongoose.model('Player',PlayerSchema)