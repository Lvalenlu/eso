'use strict';
const miArray2=[];

for(let i=0; i<25; i++) {
    miArray2[i] = i + 3;
}
//console.log(miArray2);

//Spread Operator ...

//console.log(...miArray2);

//Agregar elementos a un arreglo

miArray2.push(3,78,900,1200);
//console.log(...miArray2);

let miArray3 = [...miArray2,34,88,3450];
//console.log(...miArray2);

let resultado = miArray2.concat(miArray3);
//console.log(...resultado);

let arrayFinal =[...miArray2, ...miArray3, ...resultado];
//console.log(...arrayFinal);


//Propagador en funciones

let lenguajes = ['PHP', 'Java', 'Js', 'Ruby', 'C#', 'C++']

const printLenguajes = (len1, len2, len3 = "Assembler", ...len4) => {
    console.log(`*** los lenguajes TOP***
                ${len1} - ${len2} - ${len3}, ${len4}
                **************************`);
}

printLenguajes(...lenguajes, 'Cobol', 'F#')
//Template stream: Interpola variables al imprimir un contenido
//Assembler -> Valor por defecto (opcional)
//módulo porciones de codigo específicas