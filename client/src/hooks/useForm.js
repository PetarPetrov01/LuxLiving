import { useState } from "react";

export const useForm = (intialState) => {
    const [formValues, setFormValues] = useState(intialState);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    return {formValues, onChangeHandler};
};