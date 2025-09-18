// Importar Express
const express = require('express');
const app = express();

// Middleware para leer datos de formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Página principal con los dos formularios
app.get('/', (req, res) => {
  res.send(`
    <h2>Funcionalidad 1: Evaluar número</h2>
    <form action="/evaluar" method="post">
      <label>Ingresa un número:</label>
      <input type="number" name="numero" required>
      <button type="submit">Enviar</button>
    </form>

    <h2>Funcionalidad 2: Suma de primeros n números</h2>
    <form action="/sumar" method="post">
      <label>Ingresa un número n:</label>
      <input type="number" name="n" required>
      <button type="submit">Calcular suma</button>
    </form>
  `);
});

// Funcionalidad 1: Control selectivo con if-else
app.post('/evaluar', (req, res) => {
  const numero = Number(req.body.numero);
  let mensaje = '';

  if (numero > 0) {
    mensaje = `El número ${numero} es positivo ✅`;
  } else if (numero < 0) {
    mensaje = `El número ${numero} es negativo ❌`;
  } else {
    mensaje = 'El número es cero ⚖️';
  }

  res.send(mensaje);
});

// Funcionalidad 2: Control iterativo con bucle for
app.post('/sumar', (req, res) => {
  const n = Number(req.body.n);
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  res.send(`La suma de los primeros ${n} números naturales es: ${suma}`);
});

module.exports = app;
