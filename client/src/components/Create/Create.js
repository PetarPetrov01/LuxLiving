import { useState } from "react";

import { InputWrapper, StyledForm, StyledInput, StyledTextArea } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Create = () => {
    const { onCreateHandler } = usePropertyContext();

    const [errors, setErrors] = useState({});
    const { formValues, onChangeHandler } = useForm({
        name: '',
        location: '',
        imageUrl: '',
        price: '',
        area: '',
        description: '',
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            Object.values(errors).some(v => v) ||
            Object.values(formValues).some(v => v === '')
        ) {
            alert('Incorrect form');
        } else {
            onCreateHandler(formValues);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
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
                    name="imageUrl"
                    placeholder="Image"
                    onChange={onChangeHandler}
                    value={formValues.imageUrl}
                    onBlur={validateForm} />

                {errors.imageUrl &&
                    <p>{errors.imageUrl}</p>
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

            <InputWrapper>
                <StyledInput
                    type="number"
                    name="area"
                    placeholder="Area"
                    onChange={onChangeHandler}
                    value={formValues.area}
                    onBlur={validateForm} />

                {errors.area &&
                    <p>{errors.area}</p>
                }
            </InputWrapper>
            <InputWrapper>
                <StyledTextArea
                    name="description"
                    placeholder="Description"
                    onChange={onChangeHandler}
                    value={formValues.description}
                    onBlur={validateForm} />

                {errors.description &&
                    <p>{errors.description}</p>
                }
            </InputWrapper>

            <button>Create</button>
        </StyledForm>
    );
};