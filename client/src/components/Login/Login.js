import { Link } from "react-router-dom";

import { StyledInput, StyledForm, InputWrapper } from "../../styles/Form/StyledForm";
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/UserContext";

export const Login = (props) => {
    const { onLoginSubmit } = useUserContext();
    let { formValues, onChangeHandler } = useForm({
        email: '',
        password: ''
    });

    console.log(formValues);

    return (
        <StyledForm onSubmit={(e) => onLoginSubmit(e, formValues)}>
            <h1>Sign in</h1>

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
            <button>Login</button>
            <p>
                Not registerd? <Link to={'/register'}>Sign up</Link>
            </p>
        </StyledForm>
    );
};

/*
<section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={(e) => onLoginSubmit(e, formValues)}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        onChange={onChangeHandler}
                        value={formValues.email} />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={onChangeHandler}
                        value={formValues.password}
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
*/
