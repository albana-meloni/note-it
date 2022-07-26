// registro
let formRegistro = document.querySelector("#registro");
let inputUsuarioRegistro = document.querySelector("#registro-usuario");
let inputContrasenaRegistro = document.querySelector("#registro-contrasena");

let usuarios = [];

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
    localStorage.setItem(`usuario ${usuarioNuevo.id}`, JSON.stringify(usuarioNuevo));
    alert("Se creó el usuario, inicie sesión.");
  }
});


// inicio sesión
let formSesion = document.querySelector("#sesion");
let inputUsuarioSesion = document.querySelector("#sesion-usuario");
let inputContrasenaSesion = document.querySelector("#sesion-contrasena");

formSesion.addEventListener("submit", function(e){
  e.preventDefault();
  for (let i = 0; i <= localStorage.length; i++) {
    let usuario = localStorage.key(i);
    let usuarioObjeto = JSON.parse(localStorage.getItem(usuario));
    console.log(usuarioObjeto.nombre);
    console.log(usuarioObjeto.contrasena);
    if (inputUsuarioSesion.value === usuarioObjeto.nombre && inputContrasenaSesion.value === usuarioObjeto.contrasena) {
      window.location = "notas.html";
    }
  }
});