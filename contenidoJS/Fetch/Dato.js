'use strict';

class Datos{
    constructor (){
        this.datos = [];
        this.getDatos();
    }

    getDatos(){
        return this.datos;
    }

     //Método
    async getApi(){
        this.datos = await fetch("https://jsonplaceholder.typicode.com/todos")  //No puede continuar hasta que una promesa (catch) haya terminado o progresado
        .then(respuesta => respuesta.json())
        .then((response) => {
            for(let i of response){
                this.datos.push(i.title); //This para indicar que estos datos pertencecen a la clase datos
            }
            return this.datos;
        })
        .catch((error) => (console.error(error)))
        .finally(console.log("Ha finalizado la petición"));
    }
}
export {Datos};