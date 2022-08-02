let titulo = document.querySelector("#user-title");
titulo.innerHTML = `nOtas de <strong>${nombre}</strong><small>#${id}</small>`;

/* cuando se crea una nota */
const hoy = new Date();
let containerNotas = document.querySelector(".container-notes");

notas.forEach((nota) => {
  let div = document.createElement("div");
  div.className = "note";
  div.id = nota.id;
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

  div.addEventListener("click", (e) => {
    sessionStorage.setItem('nota-user', e.target.id);
    window.location = "./nota-individual.html";
  });
});