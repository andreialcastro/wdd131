// ANO ATUAL NO RODAPÉ
const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

// DATA DA ÚLTIMA MODIFICAÇÃO
const ultimaModificacao = new Date(document.lastModified);

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao.toLocaleString("pt-BR")}`;


// DADOS ESTÁTICOS DO CLIMA
const temperatura = 22;
const velocidadeVento = 5;


// FUNÇÃO PARA CALCULAR A SENSAÇÃO TÉRMICA
function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) -
        (11.37 * Math.pow(velocidadeVento, 0.16)) +
        (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}


// VERIFICAÇÃO DAS CONDIÇÕES PARA O CÁLCULO
const resultadoSensacao = document.querySelector("#sensacao-termica");

if (temperatura <= 10 && velocidadeVento > 4.8) {

    const sensacao = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    );

    resultadoSensacao.textContent = `${sensacao.toFixed(1)} °C`;

} else {

    resultadoSensacao.textContent = "N/A";

}