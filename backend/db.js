const mysql = require('mysql2/promise'); // Usar mysql2/promise para soporte de promesas
require('dotenv').config();

// Configuración de la conexión a la base de datos
const db = mysql.createPool({
  host: 'localhost',       // Host de la base de datos
  user: 'root',            // Usuario de la base de datos
  password: '',            // Contraseña de la base de datos
  database: 'plastico_sustentable', // Nombre de la base datos        
  waitForConnections: true, // Esperar si no hay conexiones disponibles
  connectionLimit: 10,     // Límite de conexiones en el pool
  queueLimit: 0,           // Sin límite en la cola de espera
});

// Verificar la conexión
db.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos.');
    connection.release(); // Liberar la conexión
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err.stack);
    // No usar process.exit(1) aquí, ya que detiene la ejecución del servidor.
    // En su lugar, puedes lanzar el error o manejarlo de otra manera.
    throw err; // Lanzar el error para que sea manejado por el servidor
  });

module.exports = db;
