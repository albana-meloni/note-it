let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
document.querySelector("#usuario-span").innerHTML = `${usuarioJSON.nombre}`;
document.querySelector("#id-span").innerHTML = `#${usuarioJSON.id}`;

let emailForm = document.querySelector("#email");
emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputEmail = document.querySelector("#email-input");
  const usuarioEmail = { ...usuarioJSON, mail: inputEmail.value };
  const {id, nombre, contrasena, mail} = usuarioEmail;
  inputEmail.value = "";

/*   emailjs.send("service_noteIt", "backup_mail",{
    email: `"${mail}"`,
    usuario: `"${nombre}"`,
    id: `"${id}"`,
    contrasena: `"${contrasena}"`,
  }) */

  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  
/*   Toastify({
    text: "Email adjunto!",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: "#00cc00"
    }
  }).showToast(); */
});
