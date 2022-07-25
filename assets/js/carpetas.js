let carpetas = [];
class Carpeta {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
const carpetaPredeterminada = new Carpeta("FAVORITOS");
carpetas.push(carpetaPredeterminada);
let containerCarpetas = document.querySelector(".container-folders");
let crearForm = document.querySelector("#crear__form");
crearForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.querySelector("#crear-input").value.toUpperCase();
  const carpetaNueva = new Carpeta(input);
  carpetas.push(carpetaNueva);
  input.innerText = "";
  containerCarpetas.innerHTML = "";
  carpetas.forEach((carpeta) => {
    let div = document.createElement("div");
    div.className = "folder";
    div.innerHTML = `<p>${carpeta.nombre}</p>`;
    containerCarpetas.appendChild(div);
  });
});