const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  //el preventDefault es para que no recargue la pagina
  //para evitar errores
  e.preventDefault();
  const user = document.querySelector("#txt-user");
  const u = user.value;
  const password = document.querySelector("#txt-password");
  const p = password.value;

  //Recuperando datos de mi localStorage

  const usuarioLocal = localStorage.getItem(u);
  const passwordLocal = localStorage.getItem(p);

  if (usuarioLocal != null && passwordLocal != null) {
    //llamamos al documento sesion
    console.log("correcto");
    window.location = "./app.html";
  } else {
    alert("Usuario incorrecto");
  }
});
