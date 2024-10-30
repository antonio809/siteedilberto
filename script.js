// Sistema de Cadastro
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const errorMessage = document.getElementById("register-error-message");

    // Verifica se o usuário já existe no localStorage
    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Usuário já existe. Tente outro.";
        errorMessage.style.display = "block";
    } else {
        // Armazenar novo usuário
        localStorage.setItem(username, password);
        alert("Cadastro realizado com sucesso!");
        errorMessage.style.display = "none";

        // Redirecionar para a página de login ou outra página
        window.location.href = "index.html"; // Mude para a página desejada
    }
});

// Sistema de Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error-message");

    // Verifica as credenciais no localStorage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login bem-sucedido!");
        errorMessage.style.display = "none";

        // Redirecionar para a página de sucesso (dashboard, por exemplo)
        window.location.href = "páginainicial.html"; // Mude para a página desejada
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
        errorMessage.style.display = "block";
    }
});
