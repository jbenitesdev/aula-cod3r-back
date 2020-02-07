const mongoose = require('mongoose');
//serve so para tirar a mensagem de advertencia
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo',{  useMongoClient:true })

