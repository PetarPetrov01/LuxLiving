import { Link } from "react-router-dom";
import { StyledCatalog } from "../Catalog/Catalog.styled";
import { StyledForm, StyledInput } from "./StyledForm";

export const Login = (props) => {
    let { formValues, onChangeHandler, onLoginSubmit } = {};

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
