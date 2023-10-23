import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from "../hooks/useLocalStorage";
import { userService } from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useLocalStorage('user', {});
    const navigate = useNavigate();
    const context = {
        user,
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};