import * as api from './api';
import { userStorage } from './userStorage';

const baseUrl = 'http://localhost:3030/users';

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
        alert(error);
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