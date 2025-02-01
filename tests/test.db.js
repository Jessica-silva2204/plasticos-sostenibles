const db = require('./backend/db');

db.query('SELECT 1 + 1 AS solution')
  .then(([rows]) => {
    console.log('Conexión exitosa. Resultado de la consulta:', rows[0].solution);
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err.stack);
  })
  .finally(() => {
    db.end(); // Cerrar la conexión
  });