import React from "react";
import './login.css'

const LoginScreen = () => {
  return (
    <form className="login-container">
      <h1>Login</h1>
      <input type="email" placeholder="Digite seu e-mail" required />
      <input type="password" placeholder="Digite sua senha" required />
      <button type="submit" className="btn-login">Entrar</button>

      <div className="extras">
        <a href="#">Esqueci minha senha</a> | 
        <a href="#">Criar conta</a>
      </div>
    </form>
  );
};

export default LoginScreen;
