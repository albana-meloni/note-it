let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));

let carpetas = [];
let carpetasLS = JSON.parse(localStorage.getItem(`carpetas de usuario #${usuarioJSON.id}`)) || [];
carpetasLS.forEach(element => carpetas.push(element));

class Carpeta {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

let containerCarpetas = document.querySelector(".container-folders");

let crearForm = document.querySelector("#crear__form");
crearForm.addEventListener("submit", ()=> {
  let input = document.querySelector("#crear-input").value.toUpperCase();
  const carpetaNueva = new Carpeta(input);
  carpetas.push(carpetaNueva);
  localStorage.setItem(`carpetas de usuario #${usuarioJSON.id}`, JSON.stringify(carpetas));
});

carpetas.forEach((carpeta) => {
  let div = document.createElement("div");
  div.className = "folder";
  div.innerHTML = `<p>${carpeta.nombre}</p>`;
  containerCarpetas.appendChild(div);
});

const {nombre} = carpetas;



/* 
function buscarCarpeta() {
  let entrada = prompt("Búsqueda de carpetas").toUpperCase();
  console.log(carpetas.includes(entrada));
  if (carpetas.includes(entrada)) {
    alert(`La carpeta "${entrada}" existe pero aún no tiene contenido.`);
  } else {
    alert(`La carpeta "${entrada}" no existe. Puede crearla.`);
  }
}

function eliminarCarpeta() {
  let entrada = prompt("Escriba el nombre de una carpeta para eliminarla").toUpperCase();
  let confirmacion
  if (carpetas.includes(entrada)) {
    confirmacion = confirm(`Se eliminará la carpeta "${entrada}"`);
    if (entrada == "FAVORITOS") {
      alert("Esta carpeta no se puede eliminar ;)");
    } else if (confirmacion == true) {
      let indice = carpetas.indexOf(entrada);
      carpetas.splice(indice, 1);
      console.log(carpetas.join(" - "));
      alert(`La operación finalizó y la carpeta "${entrada}" se eliminó correctamente.`);
    } else { alert(`La operación finalizó y la carpeta "${entrada}" no se eliminó.`); }
  } else { alert(`La carpeta "${entrada}" no existe.`); }

}
*/