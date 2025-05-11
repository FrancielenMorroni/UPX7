// Carregar usuários
let usuarios = JSON.parse(localStorage.getItem('users')) || [];
console.log('Usuários carregados do localStorage:', usuarios);

// Função para verificar se o usuário está logado
function getLoggedInUser() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser) : null;
}

// Função para salvar informações adicionais do usuário logado
function saveUserAdditionalInfo(cpf, telefone, instagram, facebook, tiktok) {
    const loggedInUser = getLoggedInUser();

    if (!loggedInUser) {
        alert("Nenhum usuário está logado. Redirecionando para a página de login.");
        window.location.href = "login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === loggedInUser.email);

    if (user) {
        user.cpf = cpf;
        user.telefone = telefone;
        user.instagram = instagram;
        user.facebook = facebook;
        user.tiktok = tiktok;

        localStorage.setItem("users", JSON.stringify(users));
        alert("Informações salvas com sucesso!");
    } else {
        console.error("Erro ao encontrar o usuário logado no array de usuários.");
        alert("Erro ao encontrar o usuário logado.");
    }
}

// Função para salvar serviços do usuário logado
function saveUserService(tipoServico, descricaoServico) {
    const loggedInUser = getLoggedInUser();

    if (!loggedInUser) {
        alert("Nenhum usuário está logado. Redirecionando para a página de login.");
        window.location.href = "login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === loggedInUser.email);

    if (user) {
        if (!user.servicos) {
            user.servicos = [];
        }
        user.servicos.push({ tipo: tipoServico, descricao: descricaoServico });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Serviço cadastrado com sucesso!");
    } else {
        console.error("Erro ao encontrar o usuário logado no array de usuários.");
        alert("Erro ao encontrar o usuário logado.");
    }
}

// Evento para salvar informações adicionais do usuário
document.addEventListener("DOMContentLoaded", function () {
    const perfilButton = document.querySelector(".perfil-botao");
    if (perfilButton) {
        perfilButton.addEventListener("click", function () {
            const cpf = document.getElementById("cpfUsuario")?.value || "";
            const telefone = document.getElementById("telefone")?.value || "";
            const instagram = document.getElementById("instagram")?.value || "";
            const facebook = document.getElementById("facebook")?.value || "";
            const tiktok = document.getElementById("tiktok")?.value || "";

            saveUserAdditionalInfo(cpf, telefone, instagram, facebook, tiktok);
        });
    } else {
        console.error("Botão '.perfil-botao' não encontrado no DOM.");
    }

    const servicosButton = document.querySelector(".servicos-botao");
    if (servicosButton) {
        servicosButton.addEventListener("click", function () {
            const tipoServico = document.getElementById("servico")?.value || "";
            const descricaoServico = document.getElementById("descricao")?.value || "";

            saveUserService(tipoServico, descricaoServico);
        });
    } else {
        console.error("Botão '.servicos-botao' não encontrado no DOM.");
    }

    // Atualizar o campo "Nome" com o nome do usuário logado
    updateUserNameField();
});

// Preencher o campo "Nome" com o nome do usuário logado
function updateUserNameField() {
    const loggedInUser = getLoggedInUser();

    if (!loggedInUser) {
        alert("Nenhum usuário está logado. Redirecionando para a página de login.");
        window.location.href = "login.html";
        return;
    }

    const nomeField = document.getElementById("nome");
    if (nomeField) {
        nomeField.value = loggedInUser.fullName; // Exibe o nome do usuário logado
    } else {
        console.error("Campo 'nome' não encontrado no DOM.");
    }
}