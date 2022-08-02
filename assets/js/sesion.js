let usuarios = [];
let usersLS = JSON.parse(localStorage.getItem("usuarios")) || [];
usersLS.forEach((element) => usuarios.push(element));

class Usuario {
  constructor(id, nombre, contrasena) {
    this.id = id;
    this.nombre = nombre;
    this.contrasena = contrasena;
  }
}

function toast(text, color) {
  Toastify({
    text: text,
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: color
    }
  }).showToast();
}

function crearUsuario(usuario) {
  usuarios.push(usuario);
  localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
  inputUsuarioSesion.value = inputUsuarioRegistro.value;
  inputContrasenaSesion.value = inputContrasenaRegistro.value;
  toast("Usuario creado", "#00cc00");
  inputUsuarioRegistro.value = "";
  inputContrasenaRegistro.value = "";
}

function mostrarContrasena(input) {
  input.type == "password" ? input.type = "text" : input.type = "password";
}


// registro
let formRegistro = document.querySelector("#registro");
let inputUsuarioRegistro = document.querySelector("#registro-usuario");
let inputContrasenaRegistro = document.querySelector("#registro-contrasena");

formRegistro.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputUsuarioRegistro.value == " " || inputContrasenaRegistro.value == " ") {
    toast("Valor inválido", "#000000")
  } else {
    const usuarioNuevo = new Usuario(Math.floor(Math.random() * 1000), inputUsuarioRegistro.value, inputContrasenaRegistro.value);
    let existe = usuarios.find((user) => user.nombre == usuarioNuevo.nombre);
    existe ? toast("Nombre de usuario existente", "#000000") : crearUsuario(usuarioNuevo);
  }
});
let mostrar1 = document.querySelector("#ojo1");
mostrar1.addEventListener("click", () => mostrarContrasena(inputContrasenaRegistro));



// inicio sesión
let formSesion = document.querySelector("#sesion");
let inputUsuarioSesion = document.querySelector("#sesion-usuario");
let inputContrasenaSesion = document.querySelector("#sesion-contrasena");

formSesion.addEventListener("submit", function (e) {
  e.preventDefault();

  let usuarioObjeto = usuarios.find((item) => item.nombre == inputUsuarioSesion.value && item.contrasena == inputContrasenaSesion.value);
  let user = JSON.stringify(usuarioObjeto);

  usuarioObjeto === undefined && toast("Usuario y/o contraseña incorrectos", "#000000");
  if (inputUsuarioSesion.value === usuarioObjeto.nombre && inputContrasenaSesion.value === usuarioObjeto.contrasena){
    sessionStorage.setItem("usuario activo", user);
    window.location = "./notas.html";
  }
});
let mostrar2 = document.querySelector("#ojo2");
mostrar2.addEventListener("click", () => mostrarContrasena(inputContrasenaSesion));