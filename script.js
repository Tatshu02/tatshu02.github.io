function mostrarGratitud(e) {
  e.preventDefault();

  const nombre = document.querySelector('input[type="text"]').value;
  const correo = document.querySelector('input[type="email"]').value;

  document.getElementById("nombreSaludo").textContent = `¡Hola ${nombre}!`;
  document.getElementById("correoUsuario").textContent = correo;

  const modal = document.getElementById("mensaje-gratitud");
  modal.style.display = "block";

  // Agrego el listener para cerrar al hacer clic fuera
  setTimeout(() => {
    document.addEventListener("click", clickFuera);
  }, 0);
}

function cerrarGratitud() {
  const modal = document.getElementById("mensaje-gratitud");
  modal.style.display = "none";
  document.removeEventListener("click", clickFuera);
}

function clickFuera(e) {
  const modal = document.getElementById("mensaje-gratitud");
  if (!modal.contains(e.target)) {
    cerrarGratitud();
  }
}

  function irAlFormulario() {
    const seccionFormulario = document.getElementById("formulario");
    seccionFormulario.scrollIntoView({ behavior: "smooth" });
  }
