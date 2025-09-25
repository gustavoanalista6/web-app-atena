<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Atena</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/login.css">
</head>

<body>
  <form class="login-container" id="loginForm">
    <h1>Login</h1>
    <input type="email" id="email" placeholder="Digite seu e-mail" required>
    <input type="password" id="password" placeholder="Digite sua senha" required>
    <button type="submit" class="btn-login">Entrar</button>
    <div class="extras">
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </form>

  <script>

    if (localStorage.getItem("isLoggedIn") === "true") {
      window.location.href = "index.html";
    };

    // E-mail permitido
    const validEmail = "iran@uniatenas.edu.br";

    // SHA-256 da senha "Atenas@2025"
    const validPasswordHash = "b9d4925abc6bb4243e1ac94984ffdb8747b4a958e66475115f9d45c9716185b4";

    // Função para gerar SHA-256 no navegador
    async function hashPassword(password) {
      const msgUint8 = new TextEncoder().encode(password);
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }

    // Listener do formulário
    document.getElementById("loginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const passwordHash = await hashPassword(password);

      console.log(passwordHash)
      if (email === validEmail && passwordHash === validPasswordHash) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // redireciona para página principal
      } else {
        alert("E-mail ou senha inválidos!");
      }
    });
  </script>
</body>

</html>