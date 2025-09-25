"use client";
import React, { FormEvent } from "react";
import Link from 'next/link';
import './login.css';

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(); // muda estado para logado
        router.push("/"); // redireciona para main/home
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de login
        console.log("Formulário enviado");
    }

    return (
        <>
            <form className="login-container" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="Digite seu e-mail" required />
                <input type="password" placeholder="Digite sua senha" required />
                <button type="submit" className="btn-login">Entrar</button>

                <div className="extras">
                    <a href="#">Esqueci minha senha</a> | 
                    <a href="#">Criar conta</a>
                </div>
            </form>
        </>
    );
}
