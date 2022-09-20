'use strict';

/*Tipos de programación (Pilares)
1. Abstracción
    UML (Lenguaje Unificado de Modelo)
        - Estructura del programa
        - Comportamiento del programa
2. Encapsulamiento: Aislado -> Asegurar de interferencias externas
3. Herencia: Se hereda atributos o propiedades del padre
4. Polimorfismo: Viene en muchas formas

Diagramas de clases (de objetos, ...)
-Partes
-Asociaciones
-...

Objeto: Insatancia (creación) de una clase -> Solo -> Atributos (propiedades, características), métodos (Comportamiento)

Plantilla: Guía, base, predeterminado.

Clase: Plantilla con atributos y métodos para el objeto -> Primera letra en Mayúscula
    Ej: Persona{}
        -nombre: string
        -apellido: string
        -edad: int
        +altura: double
        #peso: double
    - Modificadores de acceso (Privado) -> Encapsulamiento 
    + Public
    # Protected
        +caminar(): *retornar*
        -hablar(): string
        +yoHablo(): string
    - Métodos get & set -> Para privados
*/

//1. Objeto literal JavaScript

let cristian = {
    nombres: 'Cristian',
    apellidos: 'Guasca',
    edad: 17,
    altura: 1.63,
    peso: 65.2,
    caminar: function(){
        return `Yo camino`;
    },
    hablar: function(){
        return `Yo hablo`;
    }
}

//console.log(cristian);
//console.log(cristian.nombres, cristian. apellidos);
//console.log(cristian.caminar ());
/*No se puede
for(i of cristian){
    console.log(i)
}
*/

Object.keys(cristian).forEach((e) => console.log(e));
