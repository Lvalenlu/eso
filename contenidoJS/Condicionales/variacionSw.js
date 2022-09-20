/*
* Determinar la calificación de un estudiante
* según la siguiente escala de ponderación:
    - 0 y 2.9 la ponderación es Insuficiente.
    - 3.0 y 3.5 la ponderación es Regular.
    - 3.6 y 4.0 la ponderación es Bien.
    - 4.1 y 4.5 la ponderación es Muy bien.
    - 4.6 y 5.0 la ponderación es Excelente.
*/

let calificacion;
calificacion = 3.6;
let mensaje;
mensaje = "";
switch (calificacion){
    case calificacion >=0 && calificacion <= 2.9:
        // Template String
        mensaje = `Insuficiente la calificación: ${calificacion}`;
        break;
    case calificacion >=3.0 && calificacion <= 3.5:
        // Template String
        mensaje = `Regular la calificación: ${calificacion}`; 
        break;
    case calificacion>=3.6 && calificacion <= 4.0:
        // Template String
        mensaje = `Bien la calificación: ${calificacion}`;
        break;
    case calificacion>=4.1 && calificacion <= 4.5:
        // Template String
        mensaje = `Muy bien la calificación: ${calificacion}`;
        break;
    case calificacion>=4.6 && calificacion <= 5.0:
        // Template String
        mensaje = `Excelente la calificación: ${calificacion}`;
        break;
    default:
        mensaje = `La calificación no puede ser procesada`;
}
console.log(mensaje);
