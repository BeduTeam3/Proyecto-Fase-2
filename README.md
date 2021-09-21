# Proyecto 

#### Fase 2 - Modulo 2
## Equipo 3
- Erick Carranza Meza | [ErickCM14](https://github.com/ErickCM14)
- Hiram Chávez López | [JustLearningMX](https://github.com/JustLearningMX)
- Justine Delgado | [JustStewartt](https://github.com/JustStewartt)
- David Rivera Orozco | [davriv](https://github.com/davriv)
- Jesus Salvador Uribe | [mnchava](https://github.com/mnchava)

## Descripción del Proyecto
Este proyecto es acerca de una API de Libros que permite gestionar el CRUD completo de los mismos en una Librería por parte del personal (administrador), asimismo un usuario (lector) puede darse de alta para elegir libros y comentarlos. Las entidades que interactuarán con el proyecto serán:

[Historias de Usuario](https://github.com/BeduTeam3/Proyecto-Fase-2/blob/develop/UserStories.md)
- Libro: Modelará a los objetos libros, con sus características y propiedades.
- Usuario: Modelo para instanciar los tipos de usuario en una librería: administrador y lector.
- Autor: Permitirá modelar a los autores de libros, un libro puede contener varios autores y un autor puede tener varios libros, por ende, es más práctico usarlo como entidad separada de Libro.
- Comentario: Modelará los comentarios hechos por usuarios (tanto registrados como no registrados) acerca de un libro.

[Historias de Usuario](https://github.com/BeduTeam3/Proyecto-Fase-2/blob/main/Historias-CasosDeUso.pptx)

[Diagrama de Casos de Uso](https://github.com/BeduTeam3/Proyecto-Fase-2/blob/main/BeduF2M2-CasosDeUso.drawio.png)

## Clonar y correr este proyecto

Clonar la estructura de archivos:
```
git clone https://github.com/BeduTeam3/Proyecto-Fase-2
```
Instalar modulos de Node:
```
cd Proyecto-Fase-2/api
npm install
```
