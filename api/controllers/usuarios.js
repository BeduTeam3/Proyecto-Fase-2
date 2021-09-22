const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");

function crearUsuario(req, res, next) {
  const body = req.body,
    password = body.password;
  const user = new Usuario(body);

  user.crearPassword(password);
  user
    .save()
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch(next);
}

function obtenerUsuarios(req, res, next) {
  Usuario.findById(req.body.usuario.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401);
    }
    return res.send(user.publicData());
  }).catch((err) => res.send(err));
}

function modificarUsuario(req, res, next) {

  Usuario.findById(req.body.id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.username !== "undefined")
        user.username = nuevaInfo.username;

      if (typeof nuevaInfo.password !== "undefined")
        user.crearPassword(nuevaInfo.password);

      user
        .save()
        .then((updatedUser) => {
          res.status(201).json(updatedUser.publicData());
        })
        .catch(next);
    })
    .catch(next);
}

function eliminarUsuario(req, res, next) {
  Usuario.findOneAndDelete({ _id: req.params.id })
    .then((r) => {
      res.status(200).send("Usuario eliminado");
    })
    .catch(next);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
};
