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

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005-08-07",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888-05-21",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015-07-07",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020-05-02",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974-11-19",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986-01-10",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983-12-02",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Adicione mais objetos de templos aqui...

  {
    nomeDoTemplo: "Templo de Natal, Brasil",
    localizacao: "Parnamirim-RN, Brasil",
    consagracao: "2025-05-17",
    area: 19800,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/natal-brazil-temple/natal-brazil-temple-45005-main.jpg"
  },

   {
    nomeDoTemplo: "Templo do Recife, Brasil",
    localizacao: "Recife, Brasil",
    consagracao: "2000-12-15",
    area: 37200,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },

  {
    nomeDoTemplo: "Templo de Salvador, Brasil",
    localizacao: "Salvador, Brasil",
    consagracao: "2024-10-20",
    area: 29963,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
  },
];


const container = document.querySelector("#temples-container");

function displayTemples(filteredTemples) {

    container.innerHTML = "";

    filteredTemples.forEach((templo) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${templo.nomeDoTemplo}</h2>

            <p><strong>Localização:</strong> ${templo.localizacao}</p>

            <p><strong>Consagração:</strong>
            ${new Date(templo.consagracao + "T00:00:00").toLocaleDateString("pt-BR")}
            </p>

            <p><strong>Área:</strong>
            ${templo.area.toLocaleString("pt-BR")} pés quadrados
            </p>

            <img
                src="${templo.urlDaImagem}"
                alt="${templo.nomeDoTemplo}"
                loading="lazy">
        `;

        container.appendChild(card);
    });
}

// FILTRAR OS TEMPLOS
function filterTemples(category) {

    let filteredTemples = [];

    switch (category) {

        case "antigos":
            filteredTemples = templos.filter(templo =>
                new Date(templo.consagracao).getFullYear() < 1900
            );
            break;

        case "novos":
            filteredTemples = templos.filter(templo =>
                new Date(templo.consagracao).getFullYear() > 2000
            );
            break;

        case "grandes":
            filteredTemples = templos.filter(templo =>
                templo.area > 90000
            );
            break;

        case "pequenos":
            filteredTemples = templos.filter(templo =>
                templo.area < 10000
            );
            break;

        default:
            filteredTemples = templos;
    }

    displayTemples(filteredTemples);
}

// EVENTOS DO MENU
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {

        event.preventDefault();

        const category = link.dataset.filter;

        filterTemples(category);
    });
});

// EXIBIR TODOS OS TEMPLOS AO ABRIR A PÁGINA
displayTemples(templos);