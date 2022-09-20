'use strict';
//1. Cadena a arreglo
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let miArray = cadenaDias.split("_");
//console.log(miArray);

//2. Buscar
//Función anónima ()=>{}    clásica function(){}
const result = miArray.find((e)=>e === "viernes");
//console.log(result);
const index = miArray.findIndex ((e)=> e === "domingo");
//console.log(index);

//3. Comprueba si existe un elemento dentro de un array true o false
//console.log (miArray.includes("viernes9"));

//4. Filtras elementos

let miArray2=[]; //Declarar let siempre

for(let i=0; i<25; i++) {
    miArray2[i] = i + 3;
}
console.log(miArray2);
const response = miArray2.filter((e)=>e%2 === 0);
console.log(response);
const res = miArray2.filter((e)=>e > 15);
console.log(res);

//map, some, every, reduce

// == Contenido y  === tipado -> ESTRICTO y NO ESTRICTO
