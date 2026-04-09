const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");

focoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "./assets/images/foco.png");
});
curtoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
  banner.setAttribute("src", "./assets/images/descanso-curto.png");
});
longoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
  banner.setAttribute("src", "./assets/images/descanso-longo.png");
});
