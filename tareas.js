const datos = [];

function agregarElemento() {
  let dato = document.querySelector("#texto").value;
  datos.push(dato);
}

function mostrarElemento() {
  let resultado = document.querySelector("#resultado");
  resultado.innerHTML = " "; // para que me borre todo lo que tenia anteriormente
  for (const dato of datos) {
    let datoParrafo = document.createElement("p");
    datoParrafo.innerHTML = dato;
    resultado.appendChild(datoParrafo); // con append, añado todo el contenido a mi vista
  }
}
