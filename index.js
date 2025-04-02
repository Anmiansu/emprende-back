require('dotenv').config()
// se guardan las funciones de la libreria http
const http = require("http");

//controla las peticiones que llegan al servidor
function requestController(req, res) {
    const url = req.url;
    const method = req.method;
    console.log(url, method);

    if (method === "GET" && url === "/") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.write("<h1>Hola Mundo desde la pagina principal</h1>");
        res.end();
        return;
    }

    if (method === "GET" && url === "/about") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.write("<h1>Hola Mundo desde la pagina about</h1>");
        res.end();
        return;
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write("<h1>Página no encontrada</h1>");
    res.end();
}

//configurar nuestro servidor
const server = http.createServer(requestController);

server.listen(process.env.PORT, function () {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
});