const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Carro = new Schema({
  modelo: {
    type: String
  },
  marca: {
    type: String
  },
  ano: {
    type: Number
  },
  preco: {
    type: Number
  }
},{
    collection: 'carro'
});

module.exports = mongoose.model('Carro', Carro);