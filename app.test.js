const request = require('supertest');
const app = require('./app');

describe('Rutas principales', () => {
  test('GET / devuelve HTML con formularios', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Funcionalidad 1: Evaluar número');
    expect(res.text).toContain('Funcionalidad 2: Suma de primeros n números');
  });

  test('POST /evaluar devuelve positivo', async () => {
    const res = await request(app)
      .post('/evaluar')
      .send({ numero: 5 });
    expect(res.status).toBe(200);
    expect(res.text).toBe('El número 5 es positivo ');
  });

  test('POST /evaluar devuelve negativo', async () => {
    const res = await request(app)
      .post('/evaluar')
      .send({ numero: -3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe('El número -3 es negativo ');
  });

  test('POST /evaluar devuelve cero', async () => {
    const res = await request(app)
      .post('/evaluar')
      .send({ numero: 0 });
    expect(res.status).toBe(200);
    expect(res.text).toBe('El número es cero ');
  });

  test('POST /sumar con n=5 devuelve 15', async () => {
    const res = await request(app)
      .post('/sumar')
      .send({ n: 5 });
    expect(res.status).toBe(200);
    expect(res.text).toBe('La suma de los primeros 5 números naturales es: 15');
  });
});
