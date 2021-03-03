//En este archivo de javascript se manejan los usuarios para la parte del administrador
const Ausuario = "admin@12345";
const Acontrasena = "admin@12345";

document.getElementById("proteccion").style.display = "none";
document.getElementById("proteccionSolicitud").style.display = "none";
document.getElementById("proteccionConsulta").style.display = "none";

const botonAceptar = document.getElementById("aceptar");
const botonSalir = document.getElementById("salir");
const sbotonAceptar = document.getElementById("saceptar");
const sbotonSalir = document.getElementById("ssalir");
const botonLimpiar = document.getElementById("limpiar");

botonAceptar.addEventListener("click", validar);
botonSalir.addEventListener("click", cerrar);
sbotonAceptar.addEventListener("click", svalidar);
sbotonSalir.addEventListener("click", scerrar);
botonLimpiar.addEventListener("click", limpiar);

function validar() {
    const usuario = document.getElementById("usuario");
    const contrasena = document.getElementById("contrasena");
    if ((!usuario.value) || (!contrasena.value)) {
        alert("!!! Debe llenar los campos !!!")
    }
    else {
        if((usuario.value===Ausuario)&&(contrasena.value===Acontrasena)){
            document.getElementById("formularioUsuario").reset();
            document.getElementById("usuarioSaldo").style.display = "none";
            document.getElementById("proteccion").style.display = "inline";
        }
        else{
            alert("!!! ACCESO DENEGADO !!!");
        }
    }
}

function cerrar(){
    document.getElementById("usuarioSaldo").style.display = "inline";
    document.getElementById("proteccion").style.display = "none";
}

function svalidar() {
    const susuario = document.getElementById("susuario");
    const scontrasena = document.getElementById("scontrasena");
    if ((!susuario.value) || (!scontrasena.value)) {
        alert("!!! Debe llenar los campos !!!")
    }
    else {
        if((susuario.value===Ausuario)&&(scontrasena.value===Acontrasena)){
            document.getElementById("sformularioUsuario").reset();
            document.getElementById("usuarioSolicitud").style.display = "none";
            document.getElementById("proteccionSolicitud").style.display = "inline";
        }
        else{
            alert("!!! ACCESO DENEGADO !!!");
        }
    }
}

function scerrar(){
    document.getElementById("usuarioSolicitud").style.display = "inline";
    document.getElementById("proteccionSolicitud").style.display = "none";
}

function limpiar(){
    document.getElementById('proteccionConsulta').innerHTML="";
    document.getElementById("proteccionConsulta").style.display = "none";
}