const { io } = require('../server');



//comunicacion del server con el socket
io.on('connection', (client) => { //este codigo tiene la misma intencion que  codigo de html del front para avisar cuando se esta conectado 
    //para obtener informacion del cliente, pasamos el parametro cliente, para conocer info del compu cliente
    //haciendo esta conexion de ambos lados (en index.html y server.js, tenemos el tipo de comunicacion activo-activo, entre el front y el back)
    console.log("Usuario conectado");

    client.emit('enviarMensaje', { // una vez que el usuario se ha conectado el servidor puede enviar un mensaje de bienvenida, esto lo hacemos de igual manera con emit
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => { //en este caso el que se desconecto es el usuario, pudo haber cambiado de pestaña o tab, o se le fue el internet etc
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data) //con broadcast enviamos el mensaje a todos los usuarios que están en la aplicacion o mejor dicho a nuestro servidor

        /*
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            }); //aqui ejecutamos el callback que enviamos en index.xhtml para que el servidor le diga al  usuario que se hizo correctamente
        } else {
            callback({
                resp: 'TODO SALIO MAl'
            });
        }
*/
    });

})