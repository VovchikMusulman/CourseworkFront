import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/api';
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const token = ref(null);
    const isAuthenticated = ref(false);

    const setToken = (newToken) => {
        token.value = newToken;
        isAuthenticated.value = !!newToken;
        if (newToken) {
            localStorage.setItem('access_token', newToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        }
    };

    const setUser = (userData) => {
        user.value = userData;
    };

    const login = async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            setToken(response.data.access_token);
            setUser(response.data.user || { email: credentials.email });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post('/logout');
        } finally {
            setToken(null);
            setUser(null);
            localStorage.removeItem('access_token');
            delete api.defaults.headers.common['Authorization'];
            router.push({ name: 'login' });
        }
    };

    const checkAuth = async () => {
        if (token.value) {
            try {
                const response = await api.get('/user');
                setUser(response.data);
                return true;
            } catch (error) {
                logout();
                return false;
            }
        }
        return false;
    };

    return {
        user,
        token,
        isAuthenticated,
        setToken,
        setUser,
        login,
        logout,
        checkAuth
    };
});