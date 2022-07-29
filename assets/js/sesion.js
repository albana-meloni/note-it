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

formRegistro.addEventListener("submit", function(e){
  e.preventDefault();
  const usuarioNuevo = new Usuario(Math.floor(Math.random() * 1000), inputUsuarioRegistro.value, inputContrasenaRegistro.value);
  let existe = usuarios.find(user => user.nombre == usuarioNuevo.nombre);
  if (existe) {
    alert("Este nombre de usuario ya existe, intente con otro.");
  } else {
    console.log(usuarioNuevo);
    usuarios.push(usuarioNuevo);
    console.log(usuarios);
    localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
    inputUsuarioSesion.value = inputUsuarioRegistro.value;
    inputContrasenaSesion.value = inputContrasenaRegistro.value;
    alert("Se creó el usuario, inicie sesión.");
    inputUsuarioRegistro.value = "";
    inputContrasenaRegistro.value = "";
  }
});

// inicio sesión
let formSesion = document.querySelector("#sesion");
let inputUsuarioSesion = document.querySelector("#sesion-usuario");
let inputContrasenaSesion = document.querySelector("#sesion-contrasena");

formSesion.addEventListener("submit", function(e){
  e.preventDefault();
  let usuarioObjeto = usuarios.find(item => item.nombre == inputUsuarioSesion.value);
  let user = JSON.stringify(usuarioObjeto);
  if (inputUsuarioSesion.value === usuarioObjeto.nombre && inputContrasenaSesion.value === usuarioObjeto.contrasena){
    sessionStorage.setItem("usuario activo", user);
    window.location = "notas.html";
  }
});