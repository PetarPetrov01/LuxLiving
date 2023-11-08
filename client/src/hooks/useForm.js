import { useState } from "react";

export const useForm = (initialValue, setErrors) => {
    const [formValues, setFormValues] = useState(initialValue);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
        setErrors(null);
    };

    return { formValues, onChangeHandler };
};