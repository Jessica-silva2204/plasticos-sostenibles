const request = require('supertest');
const app = require('../backend/app');
const db = require('../backend/db');

// Limpiar la base de datos antes de cada prueba
beforeEach(async () => {
  await db.query('DELETE FROM users'); // Limpiar la tabla de usuarios
});

// Cerrar la conexión a la base de datos después de todas las pruebas
afterAll(async () => {
  await db.end(); // Cerrar el pool de conexiones
});

describe('POST /register', () => {
  it('debería registrar un nuevo usuario', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Usuario registrado correctamente');
  });

  it('debería fallar si el correo electrónico ya está registrado', async () => {
    // Registrar un usuario primero
    await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    // Intentar registrar el mismo correo electrónico nuevamente
    const response = await request(app)
      .post('/register')
      .send({
        username: 'testuser2',
        email: 'test@example.com',
        password: 'password456',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('El correo electrónico ya está registrado');
  });
});