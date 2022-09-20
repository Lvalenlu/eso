'use strict';//directiva que indica que estamos trabajando en modo strict
/*Comentarios de bloque */
//Declaración de variables o contenedores
/*var variable1 = 10 ;//Carácter global
let variable2 = 23; //De ámbito local
const constante1 = 3.14; // Declarar constantes
console.log(variable2)
var variable1 = 0;
if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2)
}

console.log(variable2)*/
//Imprimir por consola

//Realizar un programa que lea 2 números y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca un número");
let suma = 0;
suma = parseFloat(num1) + parseFloat(num2)
console.log("El resultado es: " + suma);
alert("La suma es " + suma)

//Realizar un pseudocódigo que permita sumar dos números positivos

let n1;
let n2;
n1 = prompt("Introduzca un número");
n2 = prompt("Introduzca un número");
let sum = 0;
if (n1 >= 0){
    sum = parseFloat(n1) + parseFloat(n2)
console.log("El resultado es: " + sum);
alert("La suma es " + sum)
}

//Realizar un algoritmo que permita sumar dos números positivos

let cantnum;
let positivo = 0;
let negativo = 0;
let cero = 0;
let num;
let entero;
let contador = 0;
cantnum = prompt("¿Cuántos números deseaa ingresar?");
while(i < cantnum){
    num = prompt("Introduzca un número");
    if (num <=0){
        sum = parseFloat(positivo) + parseFloat(num)
    }else{
       if (num1 == 0){
        sum = parseFloat(negativo) + parseFloat(num) 
       }else{
        sum = parseFloat(cero) + parseFloat(num)  
       }
    }
    i++;
}
console.log('Positivo');
console.log('Cero');
console.log('Negativo');