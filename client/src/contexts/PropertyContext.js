import { createContext, useContext, useEffect, useState } from "react";
import { propertyService } from "../services/propertiesService";
import { useNavigate } from "react-router-dom";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

    const [sort, setSort] = useState({ type: 'name', order: 'asc' });
    const [search, setSearch] = useState('');
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        propertyService.getAll()
        propertyService.getAll(search, sort)
            .then(result => {
                setProperties(result);
            }).catch(err => {
            })
            .catch(err => {
                alert(err);
            });
    }, []);
    }, [search, sort]);

    const onSearch = (searchValue) => {
        setSearch(searchValue);
    };

    const onCreateHandler = async (data) => {
        try {
            const property = await propertyService.create(data);
            setProperties(state => ([...state, property]));
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

    const context = {
        properties,
        onCreateHandler
        onCreateHandler,
        onEditHandler,
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