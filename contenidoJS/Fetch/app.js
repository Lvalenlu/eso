'use strict';

import { Datos } from "./Dato.js";

//Instanciar el objeto de tipo de datos
//Importo, declaro, imprimo
let misDatos = new Datos();//En el parentesis no hay nada porque en el constructor no hay nada, pasar algo a 3
const resultado = misDatos.getDatos();
console.log(resultado);