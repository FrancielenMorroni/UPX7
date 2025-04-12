// Função para obter usuários do localStorage
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Função para salvar usuários no localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Evento de cadastro
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    // Obter a lista de usuários e verificar se o e-mail já está cadastrado
    const users = getUsers();
    if (users.some((user) => user.email === email)) {
        alert("E-mail já cadastrado. Tente usar outro.");
        return;
    }

    // Adicionar o novo usuário à lista e salvar no localStorage
    users.push({ fullName, phone, email, password });
    saveUsers(users);

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "index.html"; // Redirecionar para a tela de login
});

// Evento de login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obter a lista de usuários e verificar as credenciais
    const users = getUsers();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Bem-vindo(a), ${user.fullName}!`);
    } else {
        alert("E-mail ou senha inválidos. Tente novamente.");
    }
});

// Função para lidar com o login do Google
function handleGoogleSignIn(response) {
    const credential = response.credential;
    const payload = parseJwt(credential);

    // Verificar se o usuário já existe ou adicionar ao localStorage
    const users = getUsers();
    let user = users.find((user) => user.email === payload.email);

    if (!user) {
        // Adicionar o usuário do Google à lista
        user = { fullName: payload.name, email: payload.email, phone: "", password: "" };
        users.push(user);
        saveUsers(users);
    }

    alert(`Login bem-sucedido com o Google! Bem-vindo(a), ${user.fullName}!`);
}

// Função para decodificar o JWT do Google
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