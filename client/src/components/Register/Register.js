import { Link } from "react-router-dom";
import { StyledInput, StyledForm } from "../../styles/Form/StyledForm";

export const Register = () => {
    return(
        <StyledForm>
            <h1>Sign up</h1>
                <StyledInput />
                <StyledInput />
                <StyledInput />
                <button>Register</button>
                <p>
                    Not registerd? <Link to={'/login'}>Sign in</Link>
                </p>
        </StyledForm>
    );
};