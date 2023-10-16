import { Link } from "react-router-dom";
import { StyledInput, StyledForm } from "../../styles/Form/StyledForm";

export const Login = (props) => {
    // let { formValues, onChangeHandler, onLoginSubmit } = {};

    return (
        <StyledForm>
            <h1>Sign in</h1>
            <StyledInput />
            <StyledInput />
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
