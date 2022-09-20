//SpreeOperator
'use strict'
let miArreglo = [2,4,2,5,45,true,'78', "Holamundo"];
let miArreglo2 = new Array (10,2,33,4);
miArreglo.push(56);
//miArreglo= [2,4,2,5,45,true,'78', "Holamundo"];
console.log(miArreglo.length);

for(let i=0; i<miArreglo.length; i++){
    console.log(miArreglo[i]);
    break;
}
//Variaciones del for

for(let j of miArreglo2){
    console.log(j);
    break;
}

for(let j in miArreglo2){
    console.log(j);
    break;
}

miArreglo2.forEach((e)=>{
    console.log(e);
});

miArreglo2.forEach(function(e){
    console.log(e);
})

//Las dos anonimas, primera clásica, segunda tipo flecha