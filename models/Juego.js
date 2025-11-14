const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String },
  completado: { type: Boolean, default: false },
  horasJugadas: { type: Number, default: 0 },
  puntuacion: { type: Number, default: 0 },   // ⭐ YA ACEPTA PUNTUACIÓN
  portada: { type: String } // URL o link a la imagen del juego
});

module.exports = mongoose.model('Juego', juegoSchema);
