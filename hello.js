var http = require('http');

var manejador = function(solicitud, respuesta) { 
	console.log('Recibimos una nueva peticion');
	respuesta.end('Hola Mundo');
}

var servidor = http.createServer(manejador);

const port = process.env.PORT || 3000  

servidor.listen(port);