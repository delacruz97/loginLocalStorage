/* con "preventDefaul" cancelo la carga automatica del formulario */
const form = document.getElementById("fomularioo");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formularioData = new FormData(form);
  let TabletRef = document.getElementById("tb");

  let newTabletRef = TabletRef.insertRow(-1);
  let newTablet2Ref = newTabletRef.insertCell(0);
  newTablet2Ref.textContent = formularioData.get("selector");

  newTablet2Ref = newTabletRef.insertCell(1);
  newTablet2Ref.textContent = formularioData.get("description");

  newTablet2Ref = newTabletRef.insertCell(2);
  newTablet2Ref.textContent = formularioData.get("monto");

  newTablet2Ref = newTabletRef.insertCell(3);
  newTablet2Ref.textContent = formularioData.get("categoria");
});
