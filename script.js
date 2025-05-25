function mostrarGratitud(e) {
  e.preventDefault();

  const nombre = document.querySelector('input[type="text"]').value;
  const correo = document.querySelector('input[type="email"]').value;

  document.getElementById("nombreSaludo").textContent = `¡Hola ${nombre}!`;
  document.getElementById("correoUsuario").textContent = correo;

  document.getElementById("mensaje-gratitud").style.display = "block";
}

function cerrarGratitud() {
  document.getElementById("mensaje-gratitud").style.display = "none";
}
