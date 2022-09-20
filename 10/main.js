
let num;
num = prompt("Introduzca un número");

const cuadrado = impCuadrado(num);

function impCuadrado (variable){
    return Math.pow(variable, 2);
}

const impCubo = (variable) =>{
    return Math.pow(variable,3);
}

console.log(cuadrado);
console.log(impCubo(num));


alert("El cuadrado es: " + cuadrado);
alert("El cubo es: " + impCubo(num));