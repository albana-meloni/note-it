let titulo = document.querySelector("#user-title");
titulo.innerHTML = `nOtas de <strong>${usuarioJSON.nombre}</strong><small>#${usuarioJSON.id}</small>`;

/* cuando se crea una nota */
const hoy = new Date();
let containerNotas = document.querySelector(".container-notes");

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
    <small>${hoy.toLocaleDateString()}</small>
  </div>
  `;
  containerNotas.appendChild(div);
  let abrirNotaBtn = document.querySelector(".abrir-nota");
  let eliminarNotaBtn = document.querySelector(".eliminar-nota");

  div.addEventListener("click", () => window.location = "./nota-individual.html");
});