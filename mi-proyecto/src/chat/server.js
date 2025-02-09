const express = require('express');
const WebSocket = require('ws');
const app = express();
const port = 3000;

// Servidor HTTP básico
app.get('/', (req, res) => {
  res.send('Servidor de chat funcionando ✅');
});

const server = app.listen(port, () => {
  console.log(`Servidor HTTP en http://localhost:${port}`);
});

// WebSocket Server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Nuevo cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    // Envía el mensaje a todos los clientes excepto al remitente
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
