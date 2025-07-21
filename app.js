// script do menu hamburguer (abrir e fechar menu)

const menuHamb = document.getElementById("menu-hamb");
const btnFechar = document.getElementById("btn-fechar");
const header = document.getElementById("header");

menuHamb.addEventListener("click", () => {
  header.classList.toggle("aberto");
});

btnFechar.addEventListener("click", () => {
  header.classList.remove("aberto");
});
