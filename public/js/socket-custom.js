 //scripts para cuando recibamos informacion del servidor y cuando nosotros queremos enviar info al servidor


 var socket = io();
 //es una funcion que me va a mandar un mensaje  cuando este conectado al servidor
 //cuando tengo ua conexion o canal abierto entre el el servidor y el cliente
 // comunicacion del cliente con los sockets
 socket.on('connect', function() { //nuestra aplicacion o nuetsro codigo del frontend va estar pendiente de cualquier cambio o cualquier  cosa que suceda con el backend
     console.log("conectado con el servidor") //cuando levantemos el server se mostrará esta consola
 })


 socket.on('disconnect', function() { //esto es para escuchar informacion o susesos
     //si el cliente pierde la conexion con el servidor, es decir que el cliente es el que intenta conectarse pero el servidor no esta respondiendo

     console.log("Perdimos conexion con el servidor")
 })

 //vamos a hacer una comunicacion del front end hacia el servidor, es decir emitir un mensaje del cliente y que el servidor lo escuche

 socket.emit('enviarMensaje', { //este es el objeto que le quiero enviar al servidor, el servidor lo va recibir cuando yo emita  'enviarMensaje'
     usuario: 'Fernando',
     mensaje: 'Hola Mundo'
 }, function(resp) {
     console.log('respuesta server: ', resp); //esta es una confirmacion de que el objeto  fue enviado, enviar una funcion como tercer argumento, es una confirmacion de que todo salio bien
 }); //cuando el usuario obtenga la conexión, va hacer esto, pero aun asi todavia el servidor no esta escuchando





 //esto es para emit informacion, no enviar espacios o caracteres especiales, generalmente se envian objetos para enviar gran cantidad de info
 // el emit solo se lo envia al servidor, no lo reciben otros usuarios. Por ejemplo si abrimos otra ventana y mandamos mensajes con emit, solo seran recibidos por el servidor, pero no por los otros usuarios conectados
 // con el emit, solo le enviamos info al server de manera privada


 //Escuchar informacion
 socket.on('enviarMensaje', function(mensaje) {
     //Con esto obtengo la informacion que viene del servidor

     console.log("Servidor", mensaje)
 })