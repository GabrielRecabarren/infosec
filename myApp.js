const express = require('express');
const helmet = require('helmet');
const app = express();

// Usar SOLO hidePoweredBy como pide la prueba
app.use(helmet.hidePoweredBy());  // ← Así específicamente

// El resto de tus middlewares y rutas
app.use(express.json());
// ... tus rutas aquí

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});




































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Your app is listening on port ${port}`);
});
