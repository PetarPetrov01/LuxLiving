import * as api from './api';

const baseUrl = 'http://localhost:3030/data/properties';

const getAll = async () => {
    return await api.get(baseUrl);
const getAll = async (search, sort = {}) => {

    const queryArr = [];

    if (search) {
        const searchQuery = `name LIKE "${search}" OR location LIKE "${search}"`;
        const encodedQuery = encodeURIComponent(searchQuery);
        queryArr.push(`where=${encodedQuery}`);
    }

    if (Object.keys(sort).length !== 0) {
        const sortQuery = `${sort.type} ${sort.order === 'desc' ? 'desc' : ''}`;
        const encodedSort = encodeURIComponent(sortQuery);
        queryArr.push(`sortBy=${encodedSort}`);
    }

    return queryArr.length > 0
        ? await api.get(`${baseUrl}?${queryArr.join('&')}`)
        : await api.get(baseUrl);
};

const getLatest = async () =>{
    return await api.get(`${baseUrl}?sortBy=_createdOn%20desc%2C&pageSize=3`);
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
    getLatest,
    getById,
    create
    create,
    edit,
    delete: deleteById
};