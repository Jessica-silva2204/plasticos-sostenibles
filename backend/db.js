const mysql = require('mysql2');
require('dotenv').config();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',  // O el host de tu base de datos
  user: 'root',       // Nombre de usuario de la base de datos
  password: '',       // Contraseña de la base de datos
  database: 'plastico_sustentable' // Nombre de la base de datos
});

// Verificar la conexión
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    process.exit(1); // Si no se puede conectar, detener el servidor
  }
  console.log('Conexión a la base de datos establecida');
});

module.exports = db;
