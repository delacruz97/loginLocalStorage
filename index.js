//llamamos a los campos del formulario y los guardamos en variables para validar que no esten vacios y que cumplan con las reglas de regex que creamos antes de guardarlos en un array de BD

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const contrasena = document.querySelector("#password");
const formulario = document.querySelector("#formulario");

const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
const apellidoRegex = /^[a-zA-Z]{3,16}$/;
const passwordRegex = /^[a-z0-9_-]{6,18}$/;
const nombreRegex = /^[a-zA-Z]{3,16}$/;

// este array es para validar que todos los campos esten llenos
const arrayValidation = [];
const BD = [];

//esta funcion es para validar que el nombre no este vacio
const valorNombre = (nombreValue) => {
  //con "nombreValue.trim()" nos aseguramos que el nombre no este vacio
  if (nombreValue.trim()) {
    //con "nombreRegex.test(nombreValue)" vamos a validar el test de regex
    if (nombreValue.length <= 3) {
      const text = document.createTextNode(
        "Nombre no puede tener menos de cuatro carracteres"
      );
      const err = document.querySelector(".error");
      err.appendChild(text);
    }
    if (nombreValue.length >= 4) {
      const err = document.querySelector(".error");
      err.parentNode.removeChild(err);
    }
    if (nombreRegex.test(nombreValue)) {
      arrayValidation.push("nombre");
      BD.push(nombreValue);
    }
  }
};

//esta funcion es para validar que el apellido no este vacio
const valorApellido = (apellidoValue) => {
  if (apellidoValue.length <= 3) {
    const text = document.createTextNode(
      "Apellido no puede tener menos de cuatro carracteres"
    );
    const errs = document.querySelector(".errors");
    errs.appendChild(text);
  }
  if (apellidoValue.length >= 4) {
    const errs = document.querySelector(".errors");
    errs.parentNode.removeChild(errs);
  }
  if (apellidoValue.trim()) {
    if (apellidoRegex.test(apellidoValue)) {
      arrayValidation.push("apellido");
      BD.push(apellidoValue);
    }
  }
};

//esta funcion es para validar que el email no este vacio
const valorEmail = (emailValue) => {
  if (emailValue.length <= 3) {
    const text = document.createTextNode("Correo invalido + ");
    const errs = document.querySelector(".errors");
    errs.appendChild(text);
  }
  if (emailValue.length >= 4) {
    const errs = document.querySelector(".errors");
    errs.parentNode.removeChild(errs);
  }

  if (emailValue.trim()) {
    if (emailRegex.test(emailValue)) {
      arrayValidation.push("email");
      BD.push(emailValue);
    }
  }
};

//esta funcion es para validar que la contraseña no este vacia
const valorPassword = (passwordValue) => {
  if (passwordValue.trim()) {
    if (passwordRegex.test(passwordValue)) {
      arrayValidation.push("password");
      BD.push(passwordValue);
    }
  }
};
//diosssss
//esta funcion es para validar que todos los campos esten llenos
// El evento "submit" es para que cuando se presione el boton de enviar se ejecute la funcion
formulario.addEventListener("submit", (e) => {
  //el preventDefault es para que no recargue la pagina
  //para evitar errores
  e.preventDefault();

  if (arrayValidation.length === 4) {
    //con localStorage.setItem("BD", JSON.stringify(BD)) guardamos los datos en el localStorage para que sean persistentes y no se pierdan cuando se recargue la pagina o se cierre el navegador.
    //este paramentro ${BD[2]} es para que el valor del email sea el que se guarde en el localStorage
    localStorage.setItem(`${BD[3]}`, JSON.stringify(BD));
    localStorage.setItem(`${BD[2]}`, JSON.stringify(BD));
    // con window.location.reload() recargamos la pagina
    window.location.reload();
    alert("Datos guardados correctamente");
    window.location = "./index.html";
  }
});

// esta funcion se ejecuta cuando el usuario escribe en el input
//el addEventListener es una funcion que se ejecuta cuando el usuario hace algo en el input
document.addEventListener("change", (e) => {
  //el target es una funcion que nos permite obtener el valor del input
  //el matches es una funcion que nos permite validar el valor del input

  e.target.matches("#nombre") ? valorNombre(e.target.value) : null;
  e.target.matches("#apellido") ? valorApellido(e.target.value) : null;
  e.target.matches("#email") ? valorEmail(e.target.value) : null;
  e.target.matches("#password") ? valorPassword(e.target.value) : null;
});
