import { useState } from "react";
import { userStorage } from "../services/userStorage";

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        const userState = userStorage.getUser();

        if (userState) {
            return userState;
        }

        return initialValue;
    });

    const setLocalStorage = (data) => {
        setState(data);
        userStorage.setUserStorage(key, data);
    };

    return [
        state,
        setLocalStorage
    ];
};