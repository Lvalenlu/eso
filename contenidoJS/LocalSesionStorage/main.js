'use strict'
const main = document.querySelector('.main');
const btnBlue = document.querySelector('azul');
const btnRed = document.querySelector('rojo');
const btnClear = document.querySelector('borrar');
const backgroundApp = localStorage.getItem("config");

btnBlue.addEventListtener('click', () =>{
    //Tema azul
    localStorage.setItem('background', 'blue');
    main.setAttribute("class", "mainBlue");
    document.body.className = "bodyBlue";
});

btnBlue.addEventListtener('click', () =>{
    localStorage.setItem('background', 'red');
    localStorage.setItem('otro', 'ssssss')
    main.setAttribute("class", "mainRed");
    document.body.className = "bodyRed";
});

btnClear.onClick = function () {
    localStorage.removeItem("background");
};

/*
* Tarea:
* Programar el marrón
* 
*/

/*Patrones de diseños y patrones arquitectonicos*/

/*Patron arquitectonico: Estructurar nuestro proyecto de forma organizada
Patrones de diseños: Solucionar problemas*/

/*Link es Css
Script es popper
*/