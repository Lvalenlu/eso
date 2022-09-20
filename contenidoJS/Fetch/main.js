/*class Persona{
    Declare los atributos
    Constructor -> Inicializar variables
    Métodos
        
        - Se agregan modificadores de acceso
            + Public
            -Private -> Encapsular
            #Protegido Default 
    Métodos Get & Set -> Establecer o asignar
    Métodos Orden
        *Instanciar = Crear

        
        .catch(Capturar errores)
        .finallly(Siempre se va a ejecutar sin importar lo que se cumpla ol no)
    
    let miObjeto  = new Persona(-Constructor-(resolve, reject) => {
        resolve()
        reject()
    }
    API Rest
    Las clases  también son modulos
}*/
'use strict';

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(respuesta => respuesta.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => (console.error(error)))
    .finally(console.log("Ha finalizado la petición"));