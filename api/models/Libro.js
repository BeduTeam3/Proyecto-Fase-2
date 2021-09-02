/** Clase que representa un Libro */
class Libro {
    constructor(id, title, idAuthors, synopsys, isbn, category, subjects, publisher, date_published, language, edition, pages, image, prices) {
        this.id = id; //Id -String
        this.title = title; //Título -String
        this.idAuthors = idAuthors; //ARRAY de string con los Id's del(os) Autor(es)
        this.synopsys = synopsys; //Sinopsis -String
        this.isbn = isbn; //Código internacional -String
        this.category = category; //Categoría -String
        this.subjects = subjects; //ARRAY de string con los principales Temas 
        this.publisher = publisher; //Editor -String
        this.date_published = date_published; //Fecha de publicación -¿string o Date-Time?
        this.language = language; //Lenguaje -String
        this.edition = edition; //Edicion -String
        this.pages = pages; //Páginas -Int
        this.image = image; //Link a la Imagen de portada -String
        this.prices = prices; //ARRAY con los precios -¿String o int?
    }
}
module.exports = Libro;//Exportaremos la definición completa de la clase Libro