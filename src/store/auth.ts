import create from 'zustand';
import api from '../services/api';

type LoginPayload = {
  email: string;
  senha: string;
};

type User = {
  id: string;
  nome: string;
  email: string;
  foto: string;
};

type AuthHookProps = {
  user: User | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
};

export const useAuth = create<AuthHookProps>((set) => ({
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '')
    : null,
  isAuthenticated: localStorage.getItem('access_token') !== null,
  login: async ({ email, senha }: LoginPayload) => {
    const { data } = await api.post('/auth/login', { email, senha });
    const user = {
      id: data.id,
      nome: data.nome,
      email: email,
      foto: data.foto
    };
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user', JSON.stringify(user));

    set(() => ({
      user,
      isAuthenticated: true
    }));
  },
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    set(() => ({ user: null, isAuthenticated: false }));
  }
}));
