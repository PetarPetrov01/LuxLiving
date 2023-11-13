import * as api from './api';

const baseUrl = 'http://localhost:3030/data/catalog';
const getAll = async (queries) => {
    const queryArr = [];

    Object.entries(queries).forEach(([k, v]) => {
        const encodedQuery = encodeURIComponent(v);
        queryArr.push(`${k}=${encodedQuery}`);
    });

    return queryArr.length > 0
        ? await api.get(`${baseUrl}?${queryArr.join('&')}`)
        : await api.get(baseUrl);
};

const getLatest = async () => {
    return await api.get(`${baseUrl}?sort=createdAt%20desc&limit=3`);
};

const getOwn = async (userId) => {
    return await api.get(`http://localhost:3030/profile/${userId}`);
};

const getById = async (id) => {
    const prop = await api.get(`${baseUrl}/${id}`);
    return prop;
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

const bid = async (propId, userId, newPrice) => {
    const data = {
        userId: userId,
        price: newPrice
    };

    return await api.post(`http://localhost:3030/data/catalog/${propId}/bid`, data);
};

export const propertyService = {
    getAll,
    getLatest,
    getOwn,
    getById,
    create,
    edit,
    delete: deleteById,
    bid
};