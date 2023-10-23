import { Logo, Nav, StyledHeader, StyledLink, LogoLink } from "../../styles/Header/Header.styled";

import { useUserContext } from "../../contexts/UserContext";

export const Header = () => {
    const { user, onLogoutHandler } = useUserContext();

    return (
        <StyledHeader>
            <LogoLink style={{}} to={'/'}>
                <Logo src="/images/logo4.png" alt="Logo" />
            </LogoLink>
            <Nav>
                <div>
                    <StyledLink to={'/catalog'}>Catalog</StyledLink>
                    <StyledLink >Search</StyledLink>
                </div>
                {user?._id
                    ? <div>
                        <StyledLink to={'/create'}>Create</StyledLink>
                        <StyledLink onClick={onLogoutHandler}>Logout</StyledLink>
                    </div>
                    : <div>
                        <StyledLink to={'/login'} >Login</StyledLink>
                        <StyledLink to={'/register'} >Register</StyledLink>
                    </div>
                }
            </Nav>
        </StyledHeader>
    );
};