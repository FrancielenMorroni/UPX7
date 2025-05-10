// Função para carregar usuários do localStorage e preencher os campos HTML
function loadUsersIntoFields() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Selecionar o contêiner principal onde os campos serão adicionados
    const servicesContainer = document.querySelector(".main-index");

    if (users.length === 0) {
        const noUsersMessage = document.createElement("p");
        noUsersMessage.textContent = "Nenhum usuário encontrado.";
        noUsersMessage.style.color = "gray";
        noUsersMessage.style.fontStyle = "italic";
        servicesContainer.appendChild(noUsersMessage);
        return;
    }

    users.forEach(user => {
        const userBlock = document.createElement("div");
        userBlock.classList.add("user-block");

        // Criar título com o nome do profissional
        const userName = document.createElement("h3");
        userName.textContent = `Profissional: ${user.fullName}`;
        userBlock.appendChild(userName);

        // Criar lista de campos
        const fieldList = document.createElement("ul");
        fieldList.classList.add("servicos-informacoes");

        // Campo Tipo de Serviço
        const tipoServicoField = document.createElement("li");
        tipoServicoField.classList.add("servicos-lista");
        tipoServicoField.innerHTML = `
            <label class="servicos-label" for="tipoServico">Tipo de Serviço</label>
            <button class="servicos-input" type="button" disabled>${user.servicos[0]?.tipo || ''}</button>
        `;
        fieldList.appendChild(tipoServicoField);

        // Campo Descrição do Serviço
        const descricaoField = document.createElement("li");
        descricaoField.classList.add("servicos-lista");
        descricaoField.innerHTML = `
            <label class="servicos-label" for="descricaoServico">Descrição do Serviço</label>
            <button class="servicos-input" type="button" disabled>${user.servicos[0]?.descricao || ''}</button>
        `;
        fieldList.appendChild(descricaoField);

        // Campo Telefone
        const telefoneField = document.createElement("li");
        telefoneField.classList.add("perfil-lista");
        telefoneField.innerHTML = `
            <label class="perfil-label" for="telefone">Telefone</label>
            <button class="perfil-input" type="button" disabled>${user.telefone || ''}</button>
        `;
        fieldList.appendChild(telefoneField);

        // Campo Instagram
        const instagramField = document.createElement("li");
        instagramField.classList.add("servicos-lista");
        instagramField.innerHTML = `
            <label class="servicos-label" for="instagram">Instagram</label>
            <button class="servicos-input" type="button" disabled>${user.instagram || ''}</button>
        `;
        fieldList.appendChild(instagramField);

        // Campo Facebook
        const facebookField = document.createElement("li");
        facebookField.classList.add("servicos-lista");
        facebookField.innerHTML = `
            <label class="servicos-label" for="facebook">Facebook</label>
            <button class="servicos-input" type="button" disabled>${user.facebook || ''}</button>
        `;
        fieldList.appendChild(facebookField);

        // Campo TikTok
        const tiktokField = document.createElement("li");
        tiktokField.classList.add("servicos-lista");
        tiktokField.innerHTML = `
            <label class="servicos-label" for="tiktok">TikTok</label>
            <button class="servicos-input" type="button" disabled>${user.tiktok || ''}</button>
        `;
        fieldList.appendChild(tiktokField);

        // Adicionar a lista de campos ao bloco do usuário
        userBlock.appendChild(fieldList);

        // Adicionar o bloco do usuário ao contêiner principal
        servicesContainer.appendChild(userBlock);
    });
}

// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", loadUsersIntoFields);

// Função para criar e armazenar 9 usuários no localStorage (só executa se não existirem)
function seedUsers() {
    if (localStorage.getItem("users")) {
        console.log("Usuários já cadastrados. Seed não será executado novamente.");
        return;
    }

    const users = [
        // Lista de 9 usuários conforme já definido antes
    ];

    localStorage.setItem("users", JSON.stringify(users));
    console.log("Usuários cadastrados com sucesso!");
}

// Função para criar e armazenar 9 usuários no localStorage
function seedUsers() {
    const users = [
        {
            fullName: "João Silva",
            email: "joao.silva@example.com",
            telefone: "(11) 98765-4321",
            instagram: "@joaosilva",
            facebook: "facebook.com/joaosilva",
            tiktok: "@joaosilva123",
            servicos: [
                { tipo: "Eletricista", descricao: "Instalações e reparos elétricos residenciais." }
            ]
        },
        {
            fullName: "Maria Oliveira",
            email: "maria.oliveira@example.com",
            telefone: "(21) 99876-5432",
            instagram: "@mariaoliveira",
            facebook: "facebook.com/mariaoliveira",
            tiktok: "@mariaoliveira456",
            servicos: [
                { tipo: "Encanador", descricao: "Serviços de encanamento e desentupimento." }
            ]
        },
        {
            fullName: "Carlos Pereira",
            email: "carlos.pereira@example.com",
            telefone: "(31) 98654-3210",
            instagram: "@carlospereira",
            facebook: "facebook.com/carlospereira",
            tiktok: "@carlospereira789",
            servicos: [
                { tipo: "Pintor", descricao: "Pintura de interiores e exteriores." }
            ]
        },
        {
            fullName: "Ana Costa",
            email: "ana.costa@example.com",
            telefone: "(41) 98543-2109",
            instagram: "@anacosta",
            facebook: "facebook.com/anacosta",
            tiktok: "@anacosta123",
            servicos: [
                { tipo: "Jardinagem", descricao: "Cuidados com jardins e paisagismo." }
            ]
        },
        {
            fullName: "Pedro Rocha",
            email: "pedro.rocha@example.com",
            telefone: "(51) 98432-1098",
            instagram: "@pedrorocha",
            facebook: "facebook.com/pedrorocha",
            tiktok: "@pedrorocha456",
            servicos: [
                { tipo: "Marceneiro", descricao: "Construção e reparos em móveis de madeira." }
            ]
        },
        {
            fullName: "Renata Lima",
            email: "renata.lima@example.com",
            telefone: "(61) 98321-0987",
            instagram: "@renatalima",
            facebook: "facebook.com/renatalima",
            tiktok: "@renatalima789",
            servicos: [
                { tipo: "Designer de Interiores", descricao: "Consultoria e decoração de ambientes." }
            ]
        },
        {
            fullName: "Gabriel Nunes",
            email: "gabriel.nunes@example.com",
            telefone: "(71) 98210-9876",
            instagram: "@gabrielnunes",
            facebook: "facebook.com/gabrielnunes",
            tiktok: "@gabrielnunes123",
            servicos: [
                { tipo: "Gesseiro", descricao: "Instalação de forros e molduras de gesso." }
            ]
        },
        {
            fullName: "Carla Mendes",
            email: "carla.mendes@example.com",
            telefone: "(81) 98109-8765",
            instagram: "@carlamendes",
            facebook: "facebook.com/carlamendes",
            tiktok: "@carlamendes456",
            servicos: [
                { tipo: "Costureira", descricao: "Consertos e ajustes de roupas." }
            ]
        },
        {
            fullName: "Lucas Almeida",
            email: "lucas.almeida@example.com",
            telefone: "(91) 98098-7654",
            instagram: "@lucasalmeida",
            facebook: "facebook.com/lucasalmeida",
            tiktok: "@lucasalmeida789",
            servicos: [
                { tipo: "Técnico em Informática", descricao: "Manutenção e configuração de computadores." }
            ]
        }
    ];

    // Armazenar os usuários no localStorage
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Usuários cadastrados com sucesso!");
}

// Semear os usuários no localStorage
seedUsers();