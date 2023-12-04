import { StyledInput, StyledForm, InputWrapper, FormAnchor } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner/Spinner";
import { ErrorBox } from "../ErrorBox/ErrorBox";
import { useState } from "react";

export const Register = () => {

    const { onRegisterSubmit, isLoading, errors, setErrors } = useUserContext();
    const { formValues, onChangeHandler } = useForm({
        email: '',
        password: '',
        repass: ''
    }, setErrors);
    const [hidePass, setHidePass] = useState(true);

    const handleRegister = (e) => {
        e.preventDefault();

        if (Object.values(formValues).some(v => v === '')) {
            setErrors('All inputs must be filled');
            return;
        }

        if (formValues.password !== formValues.repass) {
            setErrors('Passwords do not match');
            return;
        };

        onRegisterSubmit(formValues);
    };

    const handleShowPass = (e) => {
        setHidePass(state => !state);
    };
    const iconSrc = `/images/${hidePass ? 'show' : 'hide'}-password.png`;

    return (
        <StyledForm onSubmit={handleRegister}>
            <h1>Sign up</h1>
            {errors ? <ErrorBox errors={errors} /> : null}
            <InputWrapper>
                <StyledInput
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={onChangeHandler} />
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    type={hidePass ? "password" : "text"}
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandler} />

                <img
                    src={iconSrc}
                    alt="Show pass"
                    style={{ objectFit: "cover", height: "30px" }}
                    onClick={handleShowPass} />
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    type={hidePass ? "password" : "text"}
                    placeholder="Repeat password"
                    name="repass"
                    value={formValues.repass}
                    onChange={onChangeHandler} />
            </InputWrapper>
            {isLoading
                ? <Spinner />
                : <>
                    <button>Register</button>
                    <p>
                        Already registerd? <FormAnchor to={'/login'} onClick={() => setErrors(null)}>Sign in</FormAnchor>
                    </p>
                </>}
        </StyledForm>
    );
};