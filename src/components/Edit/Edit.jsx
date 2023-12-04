import { useEffect, useState } from "react";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { StyledForm, StyledInput, InputWrapper, StyledTextArea } from "../../styles/Form/StyledForm";
import { useParams } from "react-router-dom";
import { propertyService } from "../../services/propertiesService";
import { usePropertyValidator } from "../../hooks/usePropertyValidator";
import { ErrorBox } from "../ErrorBox/ErrorBox";

export const Edit = () => {
    const { onEditHandler, errors: serverErrors } = usePropertyContext();

    const { id } = useParams();
    const { errors, validateForm } = usePropertyValidator({});

    const [hasBidder, setHasBidder] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        location: '',
        imageUrl: '',
        price: '',
        area: '',
        description: '',
    });

    useEffect(() => {
        propertyService.getById(id)
            .then(res => {
                if (res.currentBidder) {
                    setHasBidder(true);
                }
                setFormValues(res);
            })
            .catch(err => {
                alert(err);
            });
    }, [id]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            Object.values(errors).some(v => v) ||
            Object.values(formValues).some(v => v === '')
        ) {
            alert('Incorrect form');
        } else {
            onEditHandler(id, formValues);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {serverErrors ? <ErrorBox errors={errors} /> : null}

            <h1>Edit property</h1>
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
                    onBlur={validateForm}
                    disabled={hasBidder}
                />

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

            <button>Edit</button>
        </StyledForm>
    );
};