import { useForm } from "../../hooks/useForm";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { usePropertyValidator } from "../../hooks/usePropertyValidator";
import { ErrorBox } from "../ErrorBox/ErrorBox";
import { InputWrapper, StyledForm, StyledInput, StyledTextArea } from "../../styles/Form/StyledForm";

export const Create = () => {
    const { onCreateHandler, errors: serverErrors } = usePropertyContext();

    const { errors, validateForm } = usePropertyValidator({});
    const { formValues, onChangeHandler } = useForm({
        name: '',
        location: '',
        imageUrl: '',
        price: '',
        area: '',
        description: '',
    });

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
            {serverErrors ? <ErrorBox errors={serverErrors} /> : null}

            <InputWrapper errors={true}>
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

            <InputWrapper errors={true}> 
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

            <InputWrapper errors={true}>
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

            <InputWrapper errors={true}>
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

            <InputWrapper errors={true}>
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
            <InputWrapper errors={true}>
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