import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from "../hooks/useLocalStorage";
import { userService } from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useLocalStorage('user', {});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            setIsLoading(true);
            const user = await userService.login(data);
            setUser(user);
            setIsLoading(false);
            navigate('/');
        } catch (error) {
            setErrors(error);
            setIsLoading(false);
        }
    };

    const onRegisterSubmit = async (data) => {
        try {
            setIsLoading(true);
            const result = await userService.register(data);

            const user = {
                email: result.email,
                _id: result._id,
                accessToken: result.accessToken
            };

            setUser(user);
            setIsLoading(false);
            navigate('/');
        } catch (error) {
            setErrors(error);
            setIsLoading(false);
        }
    };

    const onLogoutHandler = () => {
        userService.logout();
        setUser({});
        navigate('/');
    };

    const context = {
        user,
        onLoginSubmit,
        onRegisterSubmit,
        onLogoutHandler,
        isLoading,
        errors,
        setErrors
    };

    console.log(errors);

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};