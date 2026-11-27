// Array de produtos
const produtos = [
  {
    id: "fc-1888",
    nome: "Capacitor de Fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "Fios Elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "Circuitos de Tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "Reator de Baixa Tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "Equalizador de Distorção",
    classificacaomedia: 5.0
  }
];

// Seleciona o campo de produtos
const campoProduto = document.querySelector("#produto");

// Cria as opções dinamicamente
produtos.forEach((produto) => {
    const opcao = document.createElement("option");

    opcao.value = produto.nome;
    opcao.textContent = produto.nome;

    campoProduto.appendChild(opcao);
});


// Atualiza a última modificação
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;


// Recupera o número de avaliações armazenado
let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

// Adiciona uma avaliação ao contador
totalAvaliacoes++;

// Salva o novo total no localStorage
localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

// Exibe o total na página
document.querySelector("#contador").textContent = totalAvaliacoes;

// Atualiza o ano atual no footer
document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

// Atualiza a última modificação
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;
