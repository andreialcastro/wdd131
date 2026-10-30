// Obter o ano atual
const anoAtual = new Date().getFullYear();

// Exibir o ano no rodapé
document.querySelector("#anoatual").textContent = anoAtual;

// Obter a data da última modificação
const ultimaModificacao = document.lastModified;

// Exibir a data no rodapé
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;