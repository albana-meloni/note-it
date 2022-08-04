let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;
let titulo = document.querySelector("#user-title");
titulo.innerHTML = `nOtas de <strong>${nombre}</strong><small>#${id}</small>`;

/* cuando se crea una nota */
let containerNotas = document.querySelector(".container-notes");

let notasJSON = JSON.parse(localStorage.getItem(`notas de usuario #${id}`));

notasJSON.forEach((nota) => {
  let {id, titulo, contenido, texto, hora} = nota;

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
  <div class="note-bottom">
    <small>${hora}</small>
  </div>
  `;
  containerNotas.appendChild(div);

  div.addEventListener("click", (e) => {
    sessionStorage.setItem('nota-user', e.target.id);
    window.location = "./nota-individual.html";
  });
});