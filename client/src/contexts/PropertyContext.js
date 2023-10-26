import { createContext, useContext, useEffect, useState } from "react";
import { propertyService } from "../services/propertiesService";
import { useNavigate } from "react-router-dom";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        propertyService.getAll()
            .then(result => {
                setProperties(result);
            }).catch(err => {
                alert(err);
            });
    }, []);

    const onCreateHandler = async (data) => {
        try {
            const property = await propertyService.create(data);
            setProperties(state => ([...state, property]));
            navigate('/catalog');
        } catch (error) {
            alert(error);
        }
    };

    const context = {
        properties,
        onCreateHandler
    };

    return (
        <PropertyContext.Provider value={context}>
            {children}
        </PropertyContext.Provider>
    );
};

export const usePropertyContext = () => {
    return useContext(PropertyContext);
};