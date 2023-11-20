import { Navigate, Outlet, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const OwnerGuard = ({ children }) => {

    const { getPropertyById } = usePropertyContext();
    const { id: propId } = useParams();
    const { user } = useUserContext();

    const property = getPropertyById(propId);

    if (property && property._ownerId !== user._id) {
        return <Navigate to={`/catalog/${propId}/details`} replace/>;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};