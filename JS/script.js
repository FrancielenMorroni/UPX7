TODO: CPF VALIDATO ON SIGNUP
TODO: SAVE SOME USERS WITH FOTOS AND ACTIVETES FOR SIMULATION OF CURRRENT USERS
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
            photo: "https://via.placeholder.com/150", // COLOCAR CAMINHO DA FOTO E SALVAR NA PASTA IMG
            email: "joao.silva@example.com",
            password: "123456",
        },
        {
            fullName: "Maria Oliveira",
            photo: "https://via.placeholder.com/150", // URL para a foto
            email: "maria.oliveira@example.com",
            password: "654321",
        },
        {
            fullName: "Ana Souza",
            photo: "https://via.placeholder.com/150", // URL para a foto
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

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = getUsers();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Bem-vindo(a), ${user.fullName}!`);
        window.location.href = "index.html"; 
    } else {
        alert("E-mail ou senha inválidos. Tente novamente.");
    }
});

// Handle Google stuff
function handleGoogleSignIn(response) {
    const credential = response.credential;
    const payload = parseJwt(credential);

    const users = getUsers();
    let user = users.find((user) => user.email === payload.email);

    if (!user) {
        user = { fullName: payload.name, email: payload.email, phone: "", password: "" };
        users.push(user);
        saveUsers(users);
    }

    alert(`Login bem-sucedido com o Google! Bem-vindo(a), ${user.fullName}!`);
}

function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );
    return JSON.parse(jsonPayload);
}

const fileInput = document.getElementById("photo");
const customButton = document.getElementById("customFileButton");
const fileNameDisplay = document.getElementById("fileName");

customButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const fileName = fileInput.files[0]?.name || "Nenhum arquivo selecionado";
    fileNameDisplay.textContent = fileName;
});

function handleGoogleSignIn(response) {
    const credential = response.credential;
    const payload = parseJwt(credential);

    const fullName = payload.name;
    const email = payload.email;
    const photo = payload.picture;

    const users = getUsers();
    let user = users.find((user) => user.email === email);

    if (!user) {
        user = { fullName, email, photo };
        users.push(user);
        saveUsers(users);
    }
    alert(`Bem-vindo(a), ${fullName}!`);
    window.location.href = "index.html"; 
}

function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );
    return JSON.parse(jsonPayload);
}

function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}