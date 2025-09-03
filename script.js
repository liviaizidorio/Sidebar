// Elementos principais do DOM
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const tema = document.querySelector(".tema")
const escuroClaro = document.getElementById("escuro-claro")

// Quando o botão "toggleBtn" é clicado → abre a sidebar
toggleBtn.addEventListener("click", function () {
 
  sidebar.classList.toggle("show-sidebar");
});

// Quando o botão "closeBtn" é clicado → fecha a sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Fecha a sidebar ao clicar fora dela
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.remove("show-sidebar");
  }}
);

// Alterna entre tema claro e escuro ao clicar no botão de tema
tema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Se estiver no tema escuro → troca ícone para lua
  if (document.body.classList.contains("dark-theme")) {
    escuroClaro.src = "lua.png";
    tema.style.padding = "1px";

  // Se estiver no tema claro → troca ícone para sol
  } else {
    escuroClaro.src = "sol.png";
    tema.style.padding = "0px";
  }
});

