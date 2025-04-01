require('dotenv').config()
// se guardan las funciones de la libreria http
const http = require("http");

//controla las peticiones que llegan al servidor
function requestController() {
    console.log("Recibimos una nueva petición");
}

//configurar nuestro servidor
const server = http.createServer(requestController);

server.listen(process.env.PORT, function () {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
});