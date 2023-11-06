import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { propertyService } from "../services/propertiesService";
import { redirect, useNavigate } from "react-router-dom";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

    const [query, setQuery] = useState({});
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        propertyService.getAll(query)
            .then(result => {
                //MOCK delay
                console.log('Throttling!!!');
                setTimeout(()=>{
                    setProperties(result);
                    setIsLoading(false);
                },2000);
            })
            .catch(err => {
                alert(err);
                setIsLoading(false);
            });
    }, [query]);

    const onParamsChange = useCallback((search, sort) => {
        setQuery({ search, sort });
    }, []);

    const getPropertyById = (id) => {
        return properties.find(prop => prop._id === id);
    };

    const onCreateHandler = async (data) => {
        try {
            const property = await propertyService.create(data);
            setProperties(state => ([property, ...state]));
            navigate('/catalog');
        } catch (error) {
            alert(error);
        }
    };

    const onEditHandler = async (id, data) => {
        try {
            const newProperty = await propertyService.edit(id, data);
            setProperties(state => state.map(property => property._id === id ? newProperty : property));
            navigate(`/catalog/${id}/details`);
        } catch (error) {
            alert(error);
        }
    };

    const onDeleteHandler = async (e, id) => {
        e.preventDefault();
        try {
            await propertyService.delete(id);
            setProperties(state => state.filter(property => property._id !== id));
            navigate('/catalog');
        } catch (error) {
            alert(error);
        }
    };

    const onBidHandler = async (id, userId, price) => {
        try {
            const newProperty = await propertyService.bid(id, userId, price);

            setProperties(prevProps => prevProps.map(prop => {
                return prop._id === id
                    ? {
                        ...prop,
                        currentBidder: newProperty._ownerId,
                        price: Number(newProperty.price)
                    } : prop;
            }));

            redirect(`/catalog/${id}/details`);
        } catch (error) {
            alert(error);
        }
    };

    const context = {
        properties,
        getPropertyById,
        onCreateHandler,
        onEditHandler,
        onDeleteHandler,
        onBidHandler,
        onParamsChange,
        isLoading
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