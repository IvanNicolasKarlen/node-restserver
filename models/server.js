const express = require('express')
const cors = require('cors')

class Server{

    constructor()
    {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middleware
        this.middewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body - Cualquier informacion que reciba en GET - POST - PUT - DELETE , la va a
        //                            intentar serializar a un formato JSON
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes()
    {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }


    listen()
    {
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en: '+ this.port)
        })
    }

}

module.exports = Server;