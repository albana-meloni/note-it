const hoy = new Date();



function crearToDo(titulo, contenido) {
  while (entrada != false) {
    entrada = parseInt(prompt("¿Cuántas tareas desea anotar en su to-do list?"));
    if (entrada < 1 || entrada == String) {
      entrada = parseInt(prompt("Ingrese un número válido"));
    }
    titulo = prompt("Asigne un título para su nota");
    console.log("Lista: " + titulo);
    for (let i = 1; i <= entrada; i++) {
      contenido = prompt("Escriba una tarea");
      alert("Tarea n°" + i + ": " + contenido);
      console.log(i + ". " + contenido);
    }
    entrada = confirm("¿Quiere agregar otra lista?\nPuede ver la/s lista/s por consola");
  }
}
let entrada = true;
crearToDo();



class Nota {
  constructor (titulo, contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
  }
}

let notas = [];

function crearNota() {
  let titulo = prompt("Escriba el título de la nota.");
  let contenido = prompt("Escriba el contenido de la nota.");
  const nota = new Nota(titulo, contenido);
  notas.push(nota);
  let confirmacion = confirm("Desea ingresar otra nota?");
  if (confirmacion == true) {
      crearNota();
  } else {
      alert("Usted a decidido terminar de crear notas");
  }
}
crearNota();

notas.forEach(nota => {
  console.log(`${nota.titulo} \n ${nota.contenido} \n Última modificación: ${hoy.toLocaleString()}`);
});



let carpetas = ["FAVORITOS"];

function crearCarpeta() {
  do {
    let entrada = prompt("Ingresar nombre de la carpeta").toUpperCase();
    if (entrada == null) {
      entrada = prompt("Ingresar un valor correcto").toUpperCase();
    } else if (carpetas.includes(entrada)) {
      alert("Esa carpeta ya existe :)");
    } else {
      carpetas.push(entrada);
      console.log(carpetas.join(" - "));
    }
  } while (carpetas.length == 1);
}

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


let accion = prompt(`::CARPETAS:: Elija una opción:\n"CREAR", "BUSCAR", "ELIMINAR"\nPara salir escriba "ESC".`).toUpperCase();

while (accion != "ESC") {
  switch (accion) {
    case "CREAR":
        crearCarpeta();
        accion = prompt(`::CARPETAS:: Elija una opción\n"CREAR", "BUSCAR", "ELIMINAR"\nPara salir escriba "ESC".`).toUpperCase();
      break;
  
      case "BUSCAR":
        buscarCarpeta();
        accion = prompt(`::CARPETAS:: Elija una opción\n"CREAR", "BUSCAR", "ELIMINAR"\nPara salir escriba "ESC".`).toUpperCase();
      break;
  
      case "ELIMINAR":
        eliminarCarpeta();
        accion = prompt(`::CARPETAS:: Elija una opción\n"CREAR", "BUSCAR", "ELIMINAR"\nPara salir escriba "ESC".`).toUpperCase();
      break;
  
    default:
      accion = prompt(`Introduzca un valor válido:\n"CREAR", "BUSCAR", "ELIMINAR"\nPara salir escriba "ESC".`).toUpperCase();
      break;
  }
}