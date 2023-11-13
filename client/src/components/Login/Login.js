import { StyledInput, StyledForm, InputWrapper, FormAnchor } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner/Spinner";
import { ErrorBox } from "../ErrorBox/ErrorBox";

export const Login = (props) => {
    const { onLoginSubmit, isLoading, errors, setErrors } = useUserContext();
    let { formValues, onChangeHandler } = useForm({
        email: '',
        password: ''
    }, setErrors);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formValues).some(v => v === '')) {
            return setErrors('Please fill the inputs');
        }
        onLoginSubmit(formValues);
    };

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
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChangeHandler}
                    value={formValues.password} />
            </InputWrapper>
            {isLoading
                ? <Spinner />
                : <>
                    <button>Login</button>
                    <p>
                        Not registerd? <FormAnchor to={'/register'} onClick={()=>setErrors(null)}>Sign up</FormAnchor>
                    </p>
                </>
            }
        </StyledForm>
    );
};


