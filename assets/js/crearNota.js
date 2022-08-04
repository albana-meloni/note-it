let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;


let notas = [];
let notesLS = JSON.parse(localStorage.getItem(`notas de usuario #${id}`)) || [];
notesLS.forEach(element => notas.push(element));

class Nota {
  constructor(id, titulo, contenido, texto, hora) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.texto = texto;
    this.hora = hora;
  }
}

let idNota = notas.length;

// editor de texto
let toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['code-block'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }]
];

let options = {
  placeholder: 'Escriba el contenido...',
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
};

let contenedor = document.querySelector(".container-quill");
let editor = new Quill(contenedor, options);
let DateTime = luxon.DateTime;
let dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);


let crearNotaForm = document.querySelector("#crearNota");
crearNotaForm.addEventListener("submit", function(e) {
  e.preventDefault("");
  let titulo = document.querySelector("#inputTitulo").value;
  let contenido = document.querySelector(".ql-editor").innerHTML;
  let txt = document.querySelector(".ql-editor").innerText;
  const notaNueva = new Nota(idNota, titulo, contenido, txt, dt);
  notas.push(notaNueva);
  localStorage.setItem(`notas de usuario #${id}`, JSON.stringify(notas));
  window.location = "./notas.html";
});


