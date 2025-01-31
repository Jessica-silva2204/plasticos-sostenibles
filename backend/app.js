const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./db'); // Conexión con la base de datos
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de registro
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  // Verificar si el usuario ya existe
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Error en la base de datos', error: err });
    
    if (results.length > 0) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }
    
    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insertar el usuario en la base de datos
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
      [username, email, hashedPassword], 
      (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error al registrar el usuario', error: err });
        }
        res.status(201).json({ message: 'Usuario registrado correctamente' });
      });
  });
});

// Levantar el servidor en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
