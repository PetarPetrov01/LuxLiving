import * as api from './api';
import { userStorage } from './userStorage';

let baseUrl = 'http://localhost:3030/users';

if (import.meta.env.MODE === 'production') {
    baseUrl = `${import.meta.env.VITE_URI}/users`;
}

const login = async (data) => {
    const result = await api.post(`${baseUrl}/login`, data);
    return result;
};

const register = async (data) => {
    try {
        const result = await api.post(`${baseUrl}/register`, data);
        userStorage.setUserStorage(result);
        return result;
    } catch (error) {
        throw error;
    }
};

const logout = async () => {
    try {
        await api.get(`${baseUrl}/logout`);
    } catch (error) {
        alert(error);
    }
};

export const userService = { login, register, logout };