const server = require('ws').Server;

const s = new server({ port: 5000 });

s.on('connection', function(ws) {
  ws.on('message', function(message) {
    s.clients.forEach( function (clint) {
      clint.send(message);
    });
  })
})
