let validacion = document.querySelector(".boton");
let padre = document.querySelector(".padre");
let correo = document.getElementById("correo");
let signoerror = document.getElementById("signo_error");
let msjadvertencia = document.querySelector(".msj_advertencia");

validacion.style.cursor="Pointer";

function movil(){
    /*Con la variable a continuación utilizamos la expresion regular general para validar el correo.*/
    let expresionRegular = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[a-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;

    if(expresionRegular.test(correo.value)){
        validacion.style.background="hsl(0, 80%, 86%)";
       msjadvertencia.style.display="flex";
       msjadvertencia.textContent ="Mensaje enviado";
       msjadvertencia.style.color="green";
       msjadvertencia.style.paddingTop="8px";
      correo.value="";
    
    } else{
        validacion.style.background="hsl(0, 80%, 86%)";
        correo.style.border="1px solid hsl(0, 74%, 74%)";
        signoerror.style.display="flex";
        msjadvertencia.style.display="flex";
    }
}
validacion.addEventListener("click",movil);
