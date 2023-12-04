import { StyledInput, StyledForm, InputWrapper, FormAnchor } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner/Spinner";
import { ErrorBox } from "../ErrorBox/ErrorBox";
import { useState } from "react";

export const Login = (props) => {
    const { onLoginSubmit, isLoading, errors, setErrors } = useUserContext();
    let { formValues, onChangeHandler } = useForm({
        email: '',
        password: ''
    }, setErrors);
    const [hidePass, setHidePass] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formValues).some(v => v === '')) {
            return setErrors('Please fill the inputs');
        }
        onLoginSubmit(formValues);
    };

    const handleShowPass = (e) => {
        setHidePass(state => !state);
    };
    const iconSrc = `/images/${hidePass ? 'show' : 'hide'}-password.png`;

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            {errors ? <ErrorBox errors={errors} /> : null}
            <InputWrapper>
                <StyledInput
                    placeholder="Email"
                    name="email"
                    onChange={onChangeHandler}
                    value={formValues.email} />
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    type={hidePass ? 'password':'text'}
                    placeholder="Password"
                    name="password"
                    onChange={onChangeHandler}
                    value={formValues.password} />

                <img
                    src={iconSrc}
                    alt="Show pass"
                    style={{ objectFit: "cover", height: "30px",cursor:'pointer' }}
                    onClick={handleShowPass} />
            </InputWrapper>
            {isLoading
                ? <Spinner />
                : <>
                    <button>Login</button>
                    <p>
                        Not registerd? <FormAnchor to={'/register'} onClick={() => setErrors(null)}>Sign up</FormAnchor>
                    </p>
                </>
            }
        </StyledForm>
    );
};


