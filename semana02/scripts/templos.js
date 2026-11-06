const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

anoAtual.textContent = new Date().getFullYear();

ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

const botaoMenu = document.querySelector("#menu-button");
const menu = document.querySelector("#nav-menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("open");

    const menuAberto = menu.classList.contains("open");

    botaoMenu.textContent = menuAberto ? "×" : "☰";

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});