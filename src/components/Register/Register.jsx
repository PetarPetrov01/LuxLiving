import { StyledInput, StyledForm, InputWrapper, FormAnchor } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner/Spinner";
import { ErrorBox } from "../ErrorBox/ErrorBox";

export const Register = () => {

    const { onRegisterSubmit, isLoading, errors, setErrors } = useUserContext();
    const { formValues, onChangeHandler } = useForm({
        email: '',
        password: '',
        repass: ''
    }, setErrors);

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
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandler} />
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    type="password"
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
                        Already registerd? <FormAnchor to={'/login'} onClick={()=>setErrors(null)}>Sign in</FormAnchor>
                    </p>
                </>}
        </StyledForm>
    );
};