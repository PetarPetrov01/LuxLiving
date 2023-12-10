import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export const GuestGuard = ({ children }) => {

    const { user } = useUserContext();
    console.log(user);
    if (user.accessToken) {
        return <Navigate to={'/'} replace />;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};