const setUserStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getUser = () => {
    const user = localStorage.getItem('user');
    try {
        const result = user ? JSON.parse(user) : null;
        return result;
    } catch (error) {
        alert('Error from storage');
    }
};

const deleteUser = () => {
    localStorage.clear();

};

export const userStorage = { setUserStorage, getUser, deleteUser };