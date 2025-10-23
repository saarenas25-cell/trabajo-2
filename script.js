const botonTema = document.getElementById("temaBtn");
const logo = document.getElementById("teamlog");

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");

  // Cambiar texto y logo según el modo
  if (document.body.classList.contains("modo-claro")) {
    botonTema.textContent = "Cambiar a modo oscuro ";
    logo.src = "img/logo_oscuro.png"; // Cambia a logo oscuro
  } else {
    botonTema.textContent = "Cambiar a modo claro ";
    logo.src = "img/logo_claro.png"; // Vuelve al logo claro
  }
});
