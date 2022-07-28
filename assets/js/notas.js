let titulo = document.querySelector("#user-title");
let usuarioActivo = sessionStorage.getItem(sessionStorage.key("usuario activo"));
titulo.innerHTML = "";
titulo.innerHTML = `nOtas de ${usuarioActivo.nombre} <small>#${usuarioActivo.id}</small>`;



/* cuando se crea una nota */
const hoy = new Date();
let containerNotas = document.querySelector(".container-notes");
let arrayNotas = JSON.parse(sessionStorage.getItem("notas usuario"));
arrayNotas.forEach((nota) => {
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