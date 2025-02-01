const hashPassword = require('../../backend/utils/hashPassword');

describe('hashPassword', () => {
  it('debería hashear una contraseña correctamente', async () => {
    const password = 'password123';
    const hashedPassword = await hashPassword(password);

    expect(hashedPassword).toBeDefined();
    expect(hashedPassword).not.toBe(password); // Asegura que la contraseña se haya hasheado
  });
});