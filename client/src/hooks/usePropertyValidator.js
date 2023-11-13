import { useState } from "react";

export const usePropertyValidator = (initial) => {
    const [errors, setErrors] = useState(initial);

    const validateForm = (e) => {
        const value = e.target.value;

        const errMap = {
            name: () => value.length < 4 && 'Name must be atleast 4 characters long!',
            location: () => value.length < 4 && 'location must be atleast 4 characters long!',
            imageUrl: () => !/^https?:\/\/.+/.test(value) && 'Invalid Image URL',
            price: () => Number(value) < 0.01 && 'price must be a positive number!',
            area: () => Number(value) < 0.01 && 'Area must be a positive number',
            description: () => (value.length < 10 || value.length > 200) && 'Description must be between 10 and 200 characters long!',
        };

        setErrors(prevErrors => ({ ...prevErrors, [e.target.name]: errMap[e.target.name]() }));
    };

    return {
        errors,
        validateForm
    };
};