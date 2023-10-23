import { useState } from "react";

import { InputWrapper, StyledForm, StyledInput } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";

export const Create = () => {
    const [errors, setErrors] = useState({});
    const { formValues, onChangeHandler } = useForm({
        name: '',
        location: '',
        description: '',
        price: '',
    });

    const validateForm = (e) => {
        const value = e.target.value;

        const errMap = {
            name: () => value.length < 4 && 'Name must be atleast 4 characters long!',
            location: () => value.length < 4 && 'location must be atleast 4 characters long!',
            description: () => value.length < 10 && 'description must be atleast 10 characters long!',
            price: () => Number(value) < 0 && 'price must be a positive number!'
        };

        setErrors(prevErrors => ({ ...prevErrors, [e.target.name]: errMap[e.target.name]() }));
    };

    return (
        <StyledForm>
            <h1>Lend property</h1>
            <InputWrapper>
                <StyledInput
                    name="name"
                    placeholder="Name"
                    onChange={onChangeHandler}
                    value={formValues.name}
                    onBlur={validateForm}
                />
                {errors.name &&
                    <p>{errors.name}</p>
                }

            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    name="location"
                    placeholder="Location"
                    onChange={onChangeHandler}
                    value={formValues.location}
                    onBlur={validateForm} />


                {errors.location &&
                    <p>{errors.location}</p>
                }
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    name="description"
                    placeholder="Description"
                    onChange={onChangeHandler}
                    value={formValues.description}
                    onBlur={validateForm} />

                {errors.description &&
                    <p>{errors.description}</p>
                }
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={onChangeHandler}
                    value={formValues.price}
                    onBlur={validateForm} />

                {errors.price &&
                    <p>{errors.price}</p>
                }
            </InputWrapper>

            <button>Create</button>
        </StyledForm>
    );
};