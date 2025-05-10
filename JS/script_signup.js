// Função para obter usuários do localStorage
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Função para salvar usuários no localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Função para criar usuários predefinidos no localStorage
function initializeDefaultUsers() {
    const defaultUsers = [
        {
            fullName: "João Silva",
            photo: "img/Perfis/1.png", // COLOCAR CAMINHO DA FOTO E SALVAR NA PASTA IMG
            email: "joao.silva@example.com",
            password: "123456",
        },
        {
            fullName: "Maria Oliveira",
            photo: "img/Perfis/2.jpg", // URL para a foto
            email: "maria.oliveira@example.com",
            password: "654321",
        },
        {
            fullName: "Ana Souza",
            photo: "img/Perfis/2.jpg", // URL para a foto
            email: "ana.souza@example.com",
            password: "senha123",
        },
    ];

    // Carregar usuários existentes e evitar duplicatas
    const users = getUsers();
    defaultUsers.forEach((defaultUser) => {
        if (!users.some((user) => user.email === defaultUser.email)) {
            users.push(defaultUser);
        }
    });

    saveUsers(users);
}

// Inicializar usuários predefinidos ao carregar o script
initializeDefaultUsers();


/////////////////////////////////////////////////////////////////////////////////////////////////////



function getBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function () {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}

// Pre-load image
document.getElementById("photo").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        getBase64(file, function (base64) {
            const preview = document.getElementById("profilePreview");
            preview.src = base64;
            preview.style.display = "block";
        });
    }
});

// Get localStorage
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}


function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Signup
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const photo = document.getElementById("profilePreview").src; // Obter base64 da imagem
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    const users = getUsers();
    if (users.some((user) => user.email === email)) {
        alert("E-mail já cadastrado. Tente usar outro.");
        return;
    }

    users.push({ fullName, photo, email, password });
    saveUsers(users);

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html";
});