let localCadastrados = [];
let modeloCadastrados = [];
let anoCadastrados = [];
let corCadastrados = [];
let descricaoCadastrados = [];

let carrosCadastrados = [];

function cadastroCar() {
    let local = String((document.getElementById('local')).value);
    let modelo = String((document.getElementById('modelo')).value);
    let ano = String((document.getElementById('ano')).value);
    let cor = String((document.getElementById('cor')).value);
    let descricao = String((document.getElementById('descricao')).value);
    if (ano === '' || modelo === '' || ano === '' || cor === '' || descricao === '') {
        alert('Você deve preencher todos os campos para prosseguir!')
    }
     else {
        const carro = criaCarro(local, modelo, ano, cor, descricao)
        carrosCadastrados.push(carro)
        let carrosJson = JSON.stringify(carrosCadastrados);
        localStorage.setItem('carro', carrosJson);
        // console.log(carro);
        // console.log(carrosJson);
        console.log(carrosCadastrados);
        alert('Cadastro finalizado com sucesso!');

    }    
}

function criaCarro(bairro, modelo, ano, cor, info) {
    return {
        bairro,
        modelo,
        ano,
        cor,
        info,
    };
}

const dataArray = [
    "Aarao Reis",
    "Acaba Mundo",
    "Acaica",
    "Ademar Maldonado",
    "Aeroporto",
    "Aguas Claras",
    "Alipio De Melo",
    "Alpes",
    "Alta Tensao",
    "Alta Tensao I",
    "Alta Tensao Primeira Secao",
    "Alta Tensao Segunda Secao",
    "Alto Barroca",
    "Alto Caicaras",
    "Alto Das Antenas",
    "Alto Dos Pinheiros",
    "Alto Vera Cruz",
    "Alvaro Camargos",
    "Ambrosina",
    "Anchieta",
    "Andiroba",
    "Antonio Ribeiro De Abreu",
    "Aparecida",
    "Aparecida Setima Secao",
    "Apia",
    "Apolonia",
    "Araguaia",
    "Atila De Paiva",
    "Bacurau",
    "Bairro Das Industrias I",
    "Bairro Das Industrias II",
    "Bairro Novo Das Industrias",
    "Baleia",
    "Bandeirantes",
    "Barao Homem De Melo I",
    "Barao Homem De Melo III",
    "Barao Homem De Melo IV",
    "Barao Homem De Melo Primeira Secao",
    "Barao Homem De Melo Segunda Secao",
    "Barao Homem De Melo Terceira Secao",
    "Barreiro",
    "Barro Preto",
    "Barroca",
    "Beija Flor",
    "Beira Linha",
    "Bela Vitoria",
    "Belem",
    "Belmonte",
    "Belvedere",
    "Bernadete",
    "Betania",
    "Biquinhas",
    "Bispo De Maura",
    "Boa Esperanca",
    "Boa Uniao I",
    "Boa Uniao II",
    "Boa Uniao Primeira Secao",
    "Boa Uniao Segunda Secao",
    "Boa Viagem",
    "Boa Vista",
    "Bom Jesus",
    "Bonfim",
    "Bonsucesso",
    "Brasil Industrial",
    "Braunas",
    "Buritis",
    "Cabana Do Pai Tomas",
    "Cachoeirinha",
    "Caetano Furquim",
    "Caicara Adelaide",
    "Caicaras",
    "Calafate",
    "California",
    "Camargos",
    "Campo Alegre",
    "Camponesa I",
    "Camponesa III",
    "Camponesa Primeira Secao",
    "Camponesa Segunda Secao",
    "Campus UFMG",
    "Canaa",
    "Canada",
    "Candelaria",
    "Capitao Eduardo",
    "Cardoso",
    "Carlos Prates",
    "Carmo",
    "Casa Branca",
    "Castanheira",
    "Castelo",
    "Cdi Jatoba",
    "Cenaculo",
    "Centro",
    "Ceu Azul",
    "Chacara Leonina",
    "Cidade Jardim",
    "Cidade Jardim Taquaril",
    "Cidade Nova",
    "Cinquentenário",
    "Colegio Batista",
    "Comiteco",
    "Concordia",
    "Conego Pinheiro",
    "Conego Pinheiro Primeira Secao",
    "Conego Pinheiro Segunda Secao",
    "Confisco",
    "Conjunto Bonsucesso",
    "Conjunto California I",
    "Conjunto California II",
    "Conjunto Capitao Eduardo",
    "Conjunto Celso Machado",
    "Conjunto Floramar",
    "Conjunto Jardim Filadelfia",
    "Conjunto Jatoba",
    "Conjunto Lagoa",
    "Conjunto Minascaixa",
    "Conjunto Novo Dom Bosco",
    "Conjunto Paulo VI",
    "Conjunto Providencia",
    "Conjunto Santa Maria",
    "Conjunto Sao Francisco De Assis",
    "Conjunto Serra Verde",
    "Conjunto Taquaril",
    "Copacabana",
    "Coqueiros",
    "Coracao De Jesus",
    "Coracao Eucaristico",
    "Corumbiara",
    "Cruzeiro",
    "Custodinha",
    "Delta",
    "Diamante",
    "Distrito Industrial Do Jatoba",
    "Dom Bosco",
    "Dom Cabral",
    "Dom Joaquim",
    "Dom Silverio",
    "Dona Clara",
    "Engenho Nogueira",
    "Ermelinda",
    "Ernesto Do Nascimento",
    "Esperanca",
    "Esplanada",
    "Estoril",
    "Estrela",
    "Estrela Do Oriente",
    "Etelvina Carneiro",
    "Europa",
    "Eymard",
    "Fazendinha",
    "Fernao Dias",
    "Flamengo",
    "Flavio De Oliveira",
    "Flavio Marques Lisboa",
    "Floramar",
    "Floresta",
    "Frei Leopoldo",
    "Funcionarios",
    "Gameleira",
    "Garcas",
    "Gloria",
    "Goiania",
    "Graca",
    "Grajau",
    "Granja De Freitas",
    "Granja Werneck",
    "Grota",
    "Grotinha",
    "Guanabara",
    "Guarani",
    "Guarata",
    "Gutierrez",
    "Havai",
    "Heliopolis",
    "Horto",
    "Horto Florestal",
    "Imbaubas",
    "Inconfidencia",
    "Indaia",
    "Independencia",
    "Ipe",
    "Ipiranga",
    "Itaipu",
    "Itapoa",
    "Itatiaia",
    "Jaqueline",
    "Jaragua",
    "Jardim Alvorada",
    "Jardim America",
    "Jardim Atlantico",
    "Jardim Do Vale",
    "Jardim Dos Comerciarios",
    "Jardim Felicidade",
    "Jardim Guanabara",
    "Jardim Leblon",
    "Jardim Montanhes",
    "Jardim Sao Jose",
    "Jardim Vitoria",
    "Jardinopolis",
    "Jatoba",
    "Joao Alfredo",
    "Joao Paulo II",
    "Joao Pinheiro",
    "Jonas Veiga",
    "Juliana",
    "Lagoa",
    "Lagoa Da Pampulha",
    "Lagoinha",
    "Lagoinha Leblon",
    "Lajedo",
    "Laranjeiras",
    "Leonina",
    "Leticia",
    "Liberdade",
    "Lindeia",
    "Lorena",
    "Lourdes",
    "Luxemburgo",
    "Madre Gertrudes",
    "Madri",
    "Mala E Cuia",
    "Manacas",
    "Mangabeiras",
    "Mangueiras",
    "Mantiqueira",
    "Marajo",
    "Maravilha",
    "Marcola",
    "Maria Goretti",
    "Maria Helena",
    "Maria Teresa",
    "Maria Virginia",
    "Mariano De Abreu",
    "Marieta I",
    "Marieta Ii",
    "Marieta Iii",
    "Marieta Primeira Secao",
    "Marieta Segunda Secao",
    "Marieta Terceira Secao",
    "Marilandia",
    "Mariquinhas",
    "Marmiteiros",
    "Milionarios",
    "Minas Brasil",
    "Minascaixa",
    "Minaslandia",
    "Mineirao",
    "Miramara",
    "Mirante",
    "Mirtes",
    "Monsenhor Messias",
    "Monte Azul",
    "Monte Sao Jose",
    "Morro Dos Macacos",
    "Nazare",
    "Nossa Senhora Aparecida",
    "Nossa Senhora Da Aparecida",
    "Nossa Senhora Da Conceicao",
    "Nossa Senhora De Fatima",
    "Nossa Senhora Do Rosario",
    "Nova America",
    "Nova Cachoeirinha",
    "Nova Cintra",
    "Nova Esperanca",
    "Nova Floresta",
    "Nova Gameleira",
    "Nova Granada",
    "Nova Pampulha",
    "Nova Suissa",
    "Nova Vista",
    "Novo Aarao Reis",
    "Novo Gloria",
    "Novo Ouro Preto",
    "Novo Santa Cecilia",
    "Novo Sao Lucas",
    "Novo Sao Lucas",
    "Novo Tupi",
    "Oeste",
    "Oeste",
    "Olaria",
    "Olhos D Agua",
    "Olhos D Agua",
    "Ouro Minas",
    "Ouro Minas",
    "Ouro Preto",
    "Padre Eustaquio",
    "Palmares",
    "Palmeiras",
    "Pantanal",
    "Paqueta",
    "Paraiso",
    "Parque Sao Jose",
    "Parque Sao Pedro",
    "Paulo Vi",
    "Pedreira Prado Lopes",
    "Penha",
    "Petropolis",
    "Pilar",
    "Pindorama",
    "Pindura Saia",
    "Piraja",
    "Piratininga",
    "Pirineus",
    "Planalto",
    "Pompeia",
    "Pongelupe",
    "Pousada Santo Antonio",
    "Prado",
    "Primeiro De Maio",
    "Providencia",
    "Renascenca",
    "Ribeiro De Abreu",
    "Ribeiro De Abreu",
    "Rio Branco",
    "Sagrada Familia",
    "Salgado Filho",
    "Santa Amelia",
    "Santa Branca",
    "Santa Cecilia",
    "Santa Cruz",
    "Santa Efigenia",
    "Santa Efigenia",
    "Santa Helena",
    "Santa Ines",
    "Santa Isabel",
    "Santa Lucia",
    "Santa Lucia",
    "Santa Margarida",
    "Santa Maria",
    "Santa Monica",
    "Santa Monica",
    "Santa Rita",
    "Santa Rita De Cassia",
    "Santa Rosa",
    "Santa Sofia",
    "Santa Tereza",
    "Santa Terezinha",
    "Santana Do Cafezal",
    "Santo Agostinho",
    "Santo Andre",
    "Santo Antonio",
    "Sao Benedito",
    "Sao Bento",
    "Sao Bernardo",
    "Sao Cristovao",
    "Sao Cristovao",
    "Sao Damiao",
    "Sao Francisco",
    "Sao Francisco Das Chagas",
    "Sao Gabriel",
    "Sao Gabriel",
    "Sao Geraldo",
    "Sao Goncalo",
    "Sao Joao",
    "Sao Joao Batista",
    "Sao Jorge I",
    "Sao Jorge Ii",
    "Sao Jorge Iii",
    "Sao Jorge Primeira Secao",
    "Sao Jorge Segunda Secao",
    "Sao Jorge Terceira Secao",
    "Sao Jose",
    "Sao Lucas",
    "Sao Luiz",
    "Sao Marcos",
    "Sao Paulo",
    "Sao Pedro",
    "Sao Salvador",
    "Sao Sebastiao",
    "Sao Tomaz",
    "Sao Vicente",
    "Satellite",
    "Saudade",
    "Savassi",
    "Senhor Dos Passos",
    "Serra",
    "Serra Do Curral",
    "Serra Verde",
    "Serrano",
    "Silveira",
    "Sion",
    "Solar Do Barreiro",
    "Solimoes",
    "Sport Club",
    "Sumare",
    "Suzana",
    "Suzana",
    "Taquaril",
    "Teixeira Dias",
    "Tiradentes",
    "Tiro",
    "Tres Marias",
    "Trevo",
    "Tunel De Ibirite",
    "Tupi A",
    "Tupi B",
    "Uniao",
    "Unidas",
    "Unidas",
    "Universitario",
    "Universo",
    "Universo",
    "Urca",
    "Vale Do Jatoba",
    "Varzea Da Palma",
    "Venda Nova",
    "Ventosa",
    "Vera Cruz",
    "Vila Aeroporto",
    "Vila Aeroporto Jaragua",
    "Vila Antena",
    "Vila Antena Montanhes",
    "Vila Atila De Paiva",
    "Vila Bandeirantes",
    "Vila Barragem Santa Lucia",
    "Vila Batik",
    "Vila Betania",
    "Vila Boa Vista",
    "Vila Calafate",
    "Vila California",
    "Vila Canto Do Sabia",
    "Vila Cemig",
    "Vila Cloris",
    "Vila Cloris",
    "Vila Copacabana",
    "Vila Copasa",
    "Vila Coqueiral",
    "Vila Da Amizade",
    "Vila Da Area",
    "Vila Da Luz",
    "Vila Da Paz",
    "Vila Das Oliveiras",
    "Vila De Sa",
    "Vila Dias",
    "Vila Do Pombal",
    "Vila Dos Anjos",
    "Vila Ecologica",
    "Vila Engenho Nogueira",
    "Vila Esplanada",
    "Vila Formosa",
    "Vila Fumec",
    "Vila Havai",
    "Vila Independencia I",
    "Vila Independencia Ii",
    "Vila Independencia Iv",
    "Vila Independencia Primeira Secao",
    "Vila Independencia Segunda Secao",
    "Vila Independencia Terceira Secao",
    "Vila Inestan",
    "Vila Ipiranga",
    "Vila Jardim Alvorada",
    "Vila Jardim Leblon",
    "Vila Jardim Montanhes",
    "Vila Jardim Sao Jose",
    "Vila Madre Gertrudes I",
    "Vila Madre Gertrudes Ii",
    "Vila Madre Gertrudes Iii",
    "Vila Madre Gertrudes Iv",
    "Vila Madre Gertrudes Primeira Secao",
    "Vila Madre Gertrudes Quarta Secao",
    "Vila Madre Gertrudes Segunda Secao",
    "Vila Madre Gertrudes Terceira Secao",
    "Vila Madre Gertrudes V",
    "Vila Maloca",
    "Vila Mangueiras",
    "Vila Mantiqueira",
    "Vila Maria",
    "Vila Minaslandia",
    "Vila Nossa Senhora Aparecida",
    "Vila Nossa Senhora Do Rosario",
    "Vila Nova",
    "Vila Nova Cachoeirinha I",
    "Vila Nova Cachoeirinha Ii",
    "Vila Nova Cachoeirinha Iv",
    "Vila Nova Cachoeirinha Primeira Secao",
    "Vila Nova Cachoeirinha Segunda Secao",
    "Vila Nova Dos Milionarios",
    "Vila Nova Gameleira I",
    "Vila Nova Gameleira Ii",
    "Vila Nova Gameleira Iii",
    "Vila Nova Gameleira Primeira Secao",
    "Vila Nova Gameleira Segunda Secao",
    "Vila Nova Gameleira Terceira Secao",
    "Vila Nova Paraiso",
    "Vila Novo Sao Lucas",
    "Vila Oeste",
    "Vila Olhos D Agua",
    "Vila Ouro Minas",
    "Vila Paqueta",
    "Vila Paraiso",
    "Vila Paris",
    "Vila Petropolis",
    "Vila Pilar",
    "Vila Pinho",
    "Vila Piratininga",
    "Vila Piratininga Venda Nova",
    "Vila Primeiro De Maio",
    "Vila Puc",
    "Vila Real I",
    "Vila Real Ii",
    "Vila Real Primeira Secao",
    "Vila Real Segunda Secao",
    "Vila Rica",
    "Vila Santa Monica",
    "Vila Santa Monica Primeira Secao",
    "Vila Santa Monica Segunda Secao",
    "Vila Santa Rosa",
    "Vila Santo Antonio",
    "Vila Santo Antonio Barroquinha",
    "Vila Sao Dimas",
    "Vila Sao Francisco",
    "Vila Sao Gabriel",
    "Vila Sao Jose",
    "Vila Sao Miguel",
    "Vila Sao Paulo",
    "Vila Sao Salvador",
    "Vila Sao Vicente",
    "Vila Taquaril",
    "Vila Teixeira Dias",
    "Vila Tres Marias",
    "Vila Tupi",
    "Vila Urca",
    "Vila Vale Do Jatoba",
    "Vila Ventosa",
    "Vila Vera Cruz",
    "Vila Vigor",
    "Vila Vindima",
    "Vila Vista",
    "Vila Vitoria",
    "Vila Zizi",
];


const searchInput = document.getElementById("local");
const resultsContainer = document.getElementById("results");
let selectedIndex = -1;

searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    resultsContainer.innerHTML = '';
    selectedIndex = -1;

    if (query) {
        const filteredResults = dataArray.filter(item => item.toLowerCase().includes(query));

        if (filteredResults.length) {
            resultsContainer.style.display = 'block';
            filteredResults.forEach((item, index) => {
                const div = document.createElement("div");
                div.textContent = item;
                div.classList.add("result-item");
                div.addEventListener("click", () => selectItem(item));
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.style.display = 'none';
        }
    } else {
        resultsContainer.style.display = 'none';
    }
});

searchInput.addEventListener("keydown", function (event) {
    const resultItems = document.querySelectorAll(".result-item");

    if (event.key === "ArrowDown") {
        selectedIndex = (selectedIndex + 1) % resultItems.length;
        highlightSelection(resultItems);
    } else if (event.key === "ArrowUp") {
        selectedIndex = (selectedIndex - 1 + resultItems.length) % resultItems.length;
        highlightSelection(resultItems);
    } else if (event.key === "Enter" && selectedIndex > -1) {
        event.preventDefault();
        selectItem(resultItems[selectedIndex].textContent);
    }
});

function highlightSelection(items) {
    items.forEach((item, index) => {
        item.classList.toggle("selected", index === selectedIndex);
    });
}

function selectItem(item) {
    searchInput.value = item;
    resultsContainer.style.display = 'none';
    selectedIndex = -1;
}


document.getElementById('clearButton').addEventListener('click', function() {
    const lista = document.querySelector('.lista');
    lista.innerHTML = ''; // Limpa todos os itens da lista
});
