let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

totalAvaliacoes++;

localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

document.querySelector("#contador").textContent = totalAvaliacoes;

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;
