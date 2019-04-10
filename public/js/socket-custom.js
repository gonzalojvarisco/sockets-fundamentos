
        var socket = io();

        //Escuchar

        socket.on('connect', function(){
            console.log('conectado al servidor');
        });

        socket.on('disconnect', function(){
            console.log('Se perdio la conexion con el servidor');
        });

        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Gonzalo',
            mensaje: 'Hola'
        }, function(resp){
            console.log('Respuesta del servidor: ', resp);
        });

        //escuchar informacion
        socket.on('enviarMensaje', function(resp){
            console.log('Servidor: ', resp);
        });