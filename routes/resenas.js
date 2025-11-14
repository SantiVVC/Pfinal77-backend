const express = require('express');
const router = express.Router();
const Resena = require('../models/Resena');

// Obtener reseñas
router.get('/', async (req, res) => {
  try {
    const resenas = await Resena.find().populate('juego', 'titulo');
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agregar reseña
router.post('/', async (req, res) => {
  try {
    const nuevaResena = new Resena(req.body);
    const guardada = await nuevaResena.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
