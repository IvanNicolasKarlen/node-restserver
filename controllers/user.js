const { response, request } = require('express');

// GET
const usuariosGet = (req = request, res = response) => {

    //Obtener todos los datos enviados por URL
    const { q, nombre = '' } = req.query;

    res.status(200).json({
        msg: "get API - Controlador",
        q,
        nombre
    })
  }

//POST
  const usuariosPost = (req, res = response) => {

    const {id, name} = req.body;

    res.status(200).json({
        msg: "post API - Controlador",
        id,
        name
    })
  }

//PUT
  const usuariosPut = (req, res = response) => {

    //Obtengo el parametro id
    const id = req.params.id;

    res.status(200).json({
        msg: "put API - Controlador",
        id
    })
  }

//DELETE
  const usuariosDelete = (req, res = response) => {
    res.status(200).json({
        msg: "delete API - Controlador"
    })
  }


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}