const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  juego: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego', required: true },
  autor: { type: String, default: 'Anónimo' },
  texto: { type: String, required: true },
  estrellas: { type: Number, min: 0, max: 5 }
});

module.exports = mongoose.model('Resena', resenaSchema);

