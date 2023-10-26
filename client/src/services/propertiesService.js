import * as api from './api';

const baseUrl = 'http://localhost:3030/data/properties';

const getAll = async () => {
    return await api.get(baseUrl);
};

const getById = async (id) => {
    return await api.get(`${baseUrl}/${id}`);
};

const create = async (data) => {
    return await api.post(`${baseUrl}`, data);
};


export const propertyService = {
    getAll,
    getById,
    create
};