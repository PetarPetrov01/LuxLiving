import { userStorage } from "./userStorage";

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const user = userStorage.getUser();
    if (user?.accessToken) {
        options.headers['Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(url, options);

        if (response.ok !== true) {
            const err = await response.json();

            if (response.status === 401 && err.message === 'Invalid access token') {
                userStorage.deleteUser();
                alert('Expired session, login again');
                window.location.reload();
            }

            throw err;
        }

        if (response.status === 204) {
            return response;
        }

        return await response.json();

    } catch (error) {
        throw error.message;
    }
};
const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export { get, post, put, del };