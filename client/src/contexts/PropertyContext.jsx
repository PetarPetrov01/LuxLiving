import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import { propertyService } from "../services/propertiesService";
// import { mockDelay } from "../utils/mockDelay";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

    const [query, setQuery] = useState({});
    const [properties, setProperties] = useState([]);
    const [pages, setPages] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        propertyService.getAll(query)
            .then(result => {
                //MOCK delay
                setProperties(result.data);
                setPages(result.pages);
                setIsLoading(false);
            })
            .catch(err => {
                setErrors(err);
                setIsLoading(false);
                navigate(-1);
            });
    }, [query, navigate]);

    const onParamsChange = useCallback((newQuery) => {
        setQuery(newQuery);
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
            setErrors(error);
        }
    };

    const onEditHandler = async (id, data) => {
        try {
            const newProperty = await propertyService.edit(id, data);
            setProperties(state => state.map(property => property._id === id ? newProperty : property));
            navigate(`/catalog/${id}/details`);
        } catch (error) {
            setErrors(error);
        }
    };

    const onDeleteHandler = async (e, id) => {
        e.preventDefault();
        try {
            await propertyService.delete(id);
            setProperties(state => state.filter(property => property._id !== id));
            navigate('/catalog');
        } catch (error) {
            setErrors(error);
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
            setErrors(error);
        }
    };

    const onCreateReview = async (id, data) => {
        setIsLoading(true);
        try {
            const { newRating, review } = await propertyService.createReview(id, data);

            setProperties(prevProps => prevProps.map(prop => {
                return prop._id === id
                    ? {
                        ...prop,
                        rating: Number(newRating),
                        reviews: prop.reviews.length > 0
                            ? [...prop.reviews, review]
                            : [review]
                    } : prop;
            }));
            redirect(`/catalog/${id}/details`);
            setIsLoading(false);
        } catch (error) {
            setErrors(error);
            setIsLoading(false);
        }
    };

    const onDeleteReview = async (propId, reviewId) => {
        setIsLoading(true);
        try {
            const { newRating } = propertyService.deleteReview(propId, reviewId);

            console.log(newRating)
            console.log(reviewId)

            setProperties(prevProps => prevProps.map(prop => {
                return prop._id === propId ?
                    {
                        ...prop,
                        rating: Number(newRating),
                        reviews: prop.reviews.filter(r => r !== reviewId)
                    } : prop;
            }))
        } catch (error) {
            setErrors(error);
            setIsLoading(false);
        }
    }

    const context = {
        properties,
        pages,
        getPropertyById,
        onCreateHandler,
        onEditHandler,
        onDeleteHandler,
        onBidHandler,
        onParamsChange,
        onCreateReview,
        onDeleteReview,
        isLoading,
        setErrors,
        errors
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