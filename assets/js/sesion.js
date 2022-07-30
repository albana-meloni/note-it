// registro
let formRegistro = document.querySelector("#registro");
let inputUsuarioRegistro = document.querySelector("#registro-usuario");
let inputContrasenaRegistro = document.querySelector("#registro-contrasena");

let usuarios = [];
let usersLS = JSON.parse(localStorage.getItem('usuarios')) || [];
usersLS.forEach(element => usuarios.push(element));

class Usuario {
  constructor (id, nombre, contrasena) {
    this.id = id;
    this.nombre = nombre;
    this.contrasena = contrasena;
  }
}

function crearUsuario(usuario) {
  usuarios.push(usuario);
  localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
  inputUsuarioSesion.value = inputUsuarioRegistro.value;
  inputContrasenaSesion.value = inputContrasenaRegistro.value;
  alert("Se creó el usuario, inicie sesión.");
  inputUsuarioRegistro.value = "";
  inputContrasenaRegistro.value = "";
}

formRegistro.addEventListener("submit", function(e){
  e.preventDefault();
  if (inputUsuarioRegistro.value == " " || inputContrasenaRegistro.value == " "){
    alert("Ingrese un valor válido");
  } else {
    const usuarioNuevo = new Usuario(Math.floor(Math.random() * 1000), inputUsuarioRegistro.value, inputContrasenaRegistro.value);
    let existe = usuarios.find(user => user.nombre == usuarioNuevo.nombre);
    existe ? alert("Este nombre de usuario ya existe, intente con otro.") : crearUsuario(usuarioNuevo);
  }
});

// inicio sesión
let formSesion = document.querySelector("#sesion");
let inputUsuarioSesion = document.querySelector("#sesion-usuario");
let inputContrasenaSesion = document.querySelector("#sesion-contrasena");

formSesion.addEventListener("submit", function(e){
  e.preventDefault();
  let usuarioObjeto = usuarios.find(item => item.nombre == inputUsuarioSesion.value && item.contrasena == inputContrasenaSesion.value);
  let user = JSON.stringify(usuarioObjeto);
  if (usuarioObjeto == undefined) {
    alert("Usuario y/o contraseña incorrectos.");
  } else if (inputUsuarioSesion.value === usuarioObjeto.nombre && inputContrasenaSesion.value === usuarioObjeto.contrasena){
    sessionStorage.setItem("usuario activo", user);
    window.location = "notas.html";
  }
});