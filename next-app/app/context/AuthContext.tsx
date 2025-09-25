import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Credenciais estáticas (em produção, use um banco de dados)
  const STATIC_CREDENTIALS = {
    email: 'admin@atena.com',
    password: '123456'
  };

  useEffect(() => {
    // Verifica se há um token salvo ao carregar a página
    const token = Cookies.get('auth-token');
    if (token === 'authenticated') {
      setUser({ email: STATIC_CREDENTIALS.email });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simula autenticação estática
    if (email === STATIC_CREDENTIALS.email && password === STATIC_CREDENTIALS.password) {
      const userData = { email };
      setUser(userData);
      Cookies.set('auth-token', 'authenticated', { expires: 7 }); // 7 dias
      router.push('/dashboard');
      return { success: true };
    } else {
      return { success: false, error: 'Credenciais inválidas' };
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('auth-token');
    router.push('/login');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}