import { Nav, StyledHeader, StyledLink } from "./Header.styled";

export const Header = () => {

    return (
        <StyledHeader>
            <StyledLink>LOGO</StyledLink>
            <Nav>
                <div>
                    <StyledLink to={'/catalog'}>Catalog</StyledLink>
                    <StyledLink >Search</StyledLink>
                </div>
                <div>
                    <StyledLink >Create</StyledLink>
                    <StyledLink >Logout</StyledLink>
                </div>
                <div>
                    <StyledLink to={'/login'} >Login</StyledLink>
                    <StyledLink to={'/register'} >Register</StyledLink>
                </div>
            </Nav>
        </StyledHeader>
    );
};