let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {id, nombre, contrasena} = usuarioJSON;


let carpetasJSON = JSON.parse(localStorage.getItem(`carpetas de usuario #${id}`));
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


// mostrar notas
let mensaje = document.querySelector("#vacia");
let contenidoCarpeta = JSON.parse(localStorage.getItem(`carpeta ${carpetaActual.nombre} de usuario ${id}`)) || [];
contenidoCarpeta && mostrar()
console.log(contenidoCarpeta);

function mostrar() {
  let containerNotas = document.querySelector(".container-notes");
  contenidoCarpeta.forEach((nota) => {
    let {id, titulo, contenido, texto} = nota;
  
    let div = document.createElement("div");
    div.className = "note";
    div.id = id;
    div.innerHTML = `
    <div class="note-title">
      <span><</span>
      <h3>${titulo}</h3>
      <span>/></span>
    </div>
    <p class="note-body">
      <span>//</span>
      ${texto}
    </p>
    `;
    containerNotas.appendChild(div);
  
    div.addEventListener("click", (e) => {
      sessionStorage.setItem('nota-user', e.target.id);
      window.location = "./nota-individual.html";
    });
  });
}