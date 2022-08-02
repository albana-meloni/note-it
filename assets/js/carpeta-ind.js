let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));


let carpetasJSON = JSON.parse(localStorage.getItem(`carpetas de usuario #${usuarioJSON.id}`));
let carpetaUser = sessionStorage.getItem('carpeta-user');

let carpetaActual = carpetasJSON.find(item => item.id == carpetaUser);

let tituloDOM = document.querySelector("#input-carpeta");
tituloDOM.value = carpetaActual.nombre


let borrar = document.querySelector("#folder-delete");
borrar.addEventListener("click", ()=> {
  let index = carpetasJSON.indexOf(carpetaActual);
  carpetasJSON.splice(index, 1);
  localStorage.setItem(`carpetas de usuario #${usuarioJSON.id}`, JSON.stringify(carpetasJSON));
  Toastify({
    text: "Click para confirmar",
    duration: 5000,
    gravity: "top",
    position: "right",
    destination: "/carpetas.html",
    style: {
      background: "#000000"
    }
  }).showToast();
});