/** Clase que representa un Autor */
class Autor {
    constructor(id,nombre, idBooks) {
        this.id = id; //Id -String
        this.nombre = nombre; //Título -String
        this.idBooks = idBooks; //ARRAY de string que referencía a los libros del Autor        
    }
}
module.exports = Autor;//Exportaremos la definición completa de la clase Autor