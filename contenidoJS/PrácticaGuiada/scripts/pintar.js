'use strict'

const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const estudiantes = [];

const pintarCard = (tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").content;
    if (tipo === "ESTUDIANTE"){
        for(let i of estudiantes){
            const cloneTemp = templateEstudiante.cloneNode(true);
            console.log(cloneTemp);
            cloneTemp.querySelector(".title-card").innerHTML = "<strong>DATOS DEL ESTUDIANTE</strong>";
            cloneTemp.querySelector(".data-card").innerHTML = `NOMBRES: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellido.toUpperCase()}`;
            cloneTemp.querySelector(".text-promedio").innerHTML = ` ${i.promedio}`;
            cloneTemp.querySelector(".text-aprobado").innerHTML = ` ${aprobar(i.promedio)}`;
            fragmento.appendChild(cloneTemp);
        }
    }
    cardsEstudiantes.appendChild(fragmento);
}

const aprobar = (nota) =>{
    let result = (nota >= 3 && nota <=5) ? "APROBADO" : "REPROBADO";
    return result;
}

const agregarEstudiante = (name, lastName, avg) =>{
    let persona = {
        nombre: name, 
        apellido: lastName,
        promedio: avg
    };

    estudiantes.push(persona);
}

export {pintarCard, agregarEstudiante};

//Objetos: Valores por referencia; cambio en uno de los objetos afecta el otro
//Valores primitivos, un cambio en un valor no cambia en el otro
//Reflow: Para no tener que pintar tantas veces, guarda en fragment los cards y cargar solo una vez el fragment-> Reacomodar en el fragmanRt con DOM