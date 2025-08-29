const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const tema = document.querySelector(".tema")
const escuroClaro = document.getElementById("escuro-claro")

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.remove("show-sidebar");
  }}
);

document.addEventListener("click", (e) => {
  if (escuroClaro.src.includes("sol.png")) {
    escuroClaro.src = "lua.png";
    tema.style.padding = '1px';
  } else {
    escuroClaro.src = "sol.png";
    tema.style.padding = '0px';
  }
});