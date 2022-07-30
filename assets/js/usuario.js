let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;
document.querySelector("#usuario-span").innerHTML = nombre;
document.querySelector("#id-span").innerHTML = `#${id}`;

let emailForm = document.querySelector("#email");
emailForm.addEventListener("submit", function(e){
  e.preventDefault();
  let inputEmail = document.querySelector("#email-input").value;
  const usuarioEmail = { ...usuarioJSON, email: inputEmail };
  console.log(usuarioEmail);
});