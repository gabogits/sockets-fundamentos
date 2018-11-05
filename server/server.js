const express = require('express');
const socketIO = require('socket.io');

// socket.io no trabaja directamente con express, pero si trabaja con un servidor http, que node ya trae por defecto node
const http = require('http'); //esto nos va permitir levantar un servidor






const path = require('path');

const app = express();
// express esta basado en http, cuando ejecutamos y montamos un servidor de express, express tras cortinas llama funciones del http normal que trae node

let server = http.createServer(app); //express está basado en este http


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); //lo exportamos en un modulo para poder ocupar esta variable por fuera
// IO (va mantener una conexión directa con el servidor ) = esta es la comunicacion del backend
require('./sockets/socket') // y aqui


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});