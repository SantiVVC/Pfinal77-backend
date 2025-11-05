require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Importar rutas
const juegosRoutes = require('./routes/juegos');
const resenasRoutes = require('./routes/resenas');

// Usar rutas
app.use('/api/juegos', juegosRoutes);
app.use('/api/resenas', resenasRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend de GameTracker funcionando.');
});

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
