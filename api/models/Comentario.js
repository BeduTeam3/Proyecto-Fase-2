/** Clase que representa un Comentario */
class Comentario {
    constructor(id, nombre, email, libro_id, texto, fecha) {
        this.id = id; //Id -String
        this.nombre = nombre; //Nombre de la persona que hace el comentario -String
        this.email = email; //Su email -String 
        this.libro_id = libro_id; //Referencia al libro
        this.texto = texto; //El comentario -String
        this.fecha = fecha; //La fecha -¿Date?
    }
}
module.exports = Comentario;//Exportaremos la definición completa de la clase Comentario