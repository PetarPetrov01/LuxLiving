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

const edit = async (id, data) => {
    return await api.put(`${baseUrl}/${id}`, data);
};

const deleteById = async (id) => {
    await api.del(`${baseUrl}/${id}`);
};

export const propertyService = {
    getAll,
    getById,
    create
    edit,
    delete: deleteById
};