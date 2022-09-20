const nombres = document.querySelector("#inputNames");
const edad = document.querySelector("#inputAge");
const correo = document.querySelector("#inputEmail");
const ciudad  = document.querySelector("#inputCity");
const politicaData = document.querySelector("#checkPolitica");
const formulario = document.querySelector("#form");

//Validación de formulario

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(validFieldsForm() === -1){
        alert("Good enviando formulario");
    }else{
        alert("error en formulario");
    }
});

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e => e === false);
    return response;
}

//Objeto validación

let validFields = {
    nom: false,
    edad: false, 
    ciudad: false, //TAREA
    correo: false, //TAREA
    politica:false
}

nombres.addEventListener('change',(event) =>{
    const inputNombre = (event.target.value);
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombre.match(patronNombres) ? true : false;
    console.log(Object.values(validFields));  //Tomar los valores del objeto
});

edad.addEventListener('change', function(e) {
    const patronEdad = /(^[0-9]{1,2}$)/g;
    if(parseInt(edad.value) >= 18){
        if(edad.value.match(patronEdad)){
            validFields.edad = true;
        }else{
        alert("Error en edad")
        }
    }else{
        alert("Error en edad")
    }
    console.log(Object.values(validFields));
});

ciudad.addEventListener('change',(event) =>{
    let value = ciudad.values;
    let response = value.findIndex(e => e === value);
});

correo.addEventListener('change',(event) =>{
    const inputMail = (event.target.value);
    const patronMail = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    validFields.correo = inputMail.match(patronMail) ? true : false;
    console.log(Object.values(validFields));
});


politicaData.addEventListener('change', (event)=> {
    validFields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validFields));
});