// registro
let formRegistro = document.querySelector("#registro");
let inputUsuarioRegistro = document.querySelector("#registro-usuario");
let inputContrasenaRegistro = document.querySelector("#registro-contrasena");

let usuarios = [];
let idUsuario = Math.floor(Math.random() * 1000000);

class Usuario {
  constructor (nombre, contrasena) {
    this.nombre = nombre;
    this.contrasena = contrasena;
  }
}

inputContrasenaRegistro.addEventListener("onclick", ()=> {
  
});

formRegistro.addEventListener("submit", function(e, usuarioACrear){
  e.preventDefault();
  let existe = usuarios.find(user => user.nombre == usuarioACrear.nombre);

  if (existe) {
    alert("Este usuario ya existe.");
  } else {
    const usuarioNuevo = new Usuario(inputUsuarioRegistro.value, inputContrasenaRegistro.value);
    usuarios.push(usuarioNuevo);
    console.log(usuarios);
    localStorage.setItem("usuario", JSON.stringify(usuarioNuevo));
    alert("Se creó el usuario, inicie sesión.");
  }
});





// inicio sesión
let formSesion = document.querySelector("#sesion");
let inputUsuarioSesion = document.querySelector("#sesion-usuario");
let inputContrasenaSesion = document.querySelector("#sesion-contrasena");

function abrirUsuario() {
  let usuarioCreado = localStorage.getItem(usuarioNuevo);
  if (usuarioCreado == true) {
    window.location = "./index.html";
  } else {
    alert("no funciona bro");
  }
}