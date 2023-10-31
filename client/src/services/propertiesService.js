import * as api from './api';

const baseUrl = 'http://localhost:3030/data/properties';

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

const getLatest = async () => {
    return await api.get(`${baseUrl}?sortBy=_createdOn%20desc%2C&pageSize=3`);
};

const getOwn = async (userId) => {
    return await api.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
};

const getById = async (id) => {

    const [property, bids] = await Promise.all([
        api.get(`${baseUrl}/${id}`),
        api.get(`http://localhost:3030/data/bids?where=propertyId%3D%22${id}%22&sortBy=price%20desc&load=_ownerId%3D_ownerId%3Ausers`)
    ]);

    console.log(bids);
    if (bids.length > 0) {
        //If the current property has bids, the price of the proprty should become the highest bid
        property.price = bids[0].price;
        property.currentBidder = bids[0]._ownerId.email;
    }
    console.log('FROM API');
    console.log(property);
    return property;
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

const bid = async (propId, newPrice) => {
    const data = {
        propertyId: propId,
        price: newPrice
    };

    return await api.post(`http://localhost:3030/data/bids`, data);
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