const hoy = new Date();

let notas = [];
let containerNotas = document.querySelector(".container-notes");

class Nota {
  constructor(titulo, contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
  }
}

let crearNotaForm = document.querySelector("#crearNota");
crearNotaForm.addEventListener("submit", function (e) {
  e.preventDefault("");
  let titulo = document.querySelector("#inputTitulo").value;
  let contenido = document.querySelector("#inputContenido").value;
  const notaNueva = new Nota(titulo, contenido);
  notas.push(notaNueva);
  containerNotas.innerHTML = "";
  notas.forEach((nota) => {
    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
    <div class="note-title">
      <span><</span>
      <h3>${nota.titulo}</h3>
      <span>/></span>
    </div>
    <p class="note-body">
      <span>//</span>
      ${nota.contenido}
    </p>
    <div class="note-bottom">
      <small class="eliminar-nota">Borrar</small>
      <small>${hoy.toLocaleDateString()}</small>
      <small class="abrir-nota">Abrir</small>
    </div>
    `;
    containerNotas.appendChild(div);
    let abrirNotaBtn = document.querySelector(".abrir-nota");
    let eliminarNotaBtn = document.querySelector(".eliminar-nota");
    let body = document.querySelector("body");
    let modal = document.createElement("div");
    modal.className = "modal-note";
    abrirNotaBtn.addEventListener("click", () => {
      modal.innerHTML = `
      <div>
        <h3>${nota.titulo}</h3>
        <small id="close-modal">x</small>
      </div>
      <hr>
      <p>${nota.contenido}</p>
      `;
      modal.style.opacity = "1";
      modal.style.display = "block";
      body.appendChild(modal);
      let cerrarModal = document.querySelector("#close-modal");
      cerrarModal.addEventListener("click", () => {
        modal.style.opacity = "0";
        modal.style.display = "none";
      });
    });
  });
  window.location = "./notas.html";
});



// LOCAL STORAGE
let notasPagina

localStorage.setItem("notas", notasPagina)