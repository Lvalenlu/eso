'use strict';
let num1;
let num2;
num1 = 9;
num2 = '9';

if (num1 < 0){

}else if (num1 > 0){
    if ((num1 % 3 === 0) && (parseInt(num2)>0)){
        console.log("num1 es múltiplo de 3 y num2 es > 0");
    }else{
        if(num1 % 2 === 0)
            console.log("num1 es múltiplo de 2")
    }
}
//Switch
let opcion;
opcion = prompt("Introduzca una opción 1-4");

switch (opcion){
    case '1':
        alert("Seleccionó la opción 1");
    case '2':
        alert("Seleccionó la opción 2");
    case '3':
        alert("Seleccionó la opción 3");
    case '4':
        alert("Seleccionó la opción 4");
    default:
        alert("Seleccionó una opción incorrecta");
}