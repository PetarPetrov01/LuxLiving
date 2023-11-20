import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export const UserGuard = ({ children }) => {

    const { user } = useUserContext();

    if (!user.accessToken) {
        return <Navigate to={'/login'} replace />;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};