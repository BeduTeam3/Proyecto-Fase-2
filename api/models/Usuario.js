/** Clase que representa a un usuario (Admin o Cliente) de la plataforma*/
class Usuario {
    constructor(id, username, nombre, apellido, email, password, tipo) {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.tipo = tipo; // tipo Admin o Cliente
    }
  }
  module.exports = Usuario;