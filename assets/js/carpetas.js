let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));

let carpetas = [];
let carpetasLS = JSON.parse(localStorage.getItem(`carpetas de usuario #${usuarioJSON.id}`)) || [];
carpetasLS.forEach(element => carpetas.push(element));

class Carpeta {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

let containerCarpetas = document.querySelector(".container-folders");

let idCarpeta = carpetas.length;

let crearForm = document.querySelector("#crear__form");
crearForm.addEventListener("submit", ()=> {
  let input = document.querySelector("#crear-input").value.toUpperCase();
  const carpetaNueva = new Carpeta(idCarpeta, input);
  carpetas.push(carpetaNueva);
  localStorage.setItem(`carpetas de usuario #${usuarioJSON.id}`, JSON.stringify(carpetas));
});
carpetas.forEach((carpeta) => {
  let div = document.createElement("div");
  div.className = "folder";
  div.id = carpeta.id;
  div.innerHTML = `<p>${carpeta.nombre}</p>`;
  containerCarpetas.appendChild(div);
  
  div.addEventListener("click", (e) => {
    sessionStorage.setItem('carpeta-user', e.target.id);
    window.location = "./carpeta-individual.html";
  });
});