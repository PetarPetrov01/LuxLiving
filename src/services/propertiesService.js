import * as api from './api';

const PRODUCTION_URI = import.meta.env.VITE_URI;
let baseUrl = 'http://localhost:3030/data/catalog';

if (import.meta.env.MODE === 'production') {
    baseUrl = `${PRODUCTION_URI}/data/catalog`;
}

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
    return await api.get(`${PRODUCTION_URI}/profile/${userId}`);
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

    return await api.post(`${baseUrl}/${propId}/bid`, data);
};

const createReview = async (propId, data) => {
    return await api.post(`${baseUrl}/${propId}/review`, data);
};

const editReview = async (propId, data) => {
    return await api.put(`${baseUrl}/${propId}/review`, data);
};

const deleteReview = async (propId, reviewId) => {
    return await api.del(`${baseUrl}/${propId}/review`, { reviewId });
};

export const propertyService = {
    getAll,
    getLatest,
    getOwn,
    getById,
    create,
    edit,
    delete: deleteById,
    bid,
    createReview,
    editReview,
    deleteReview
};