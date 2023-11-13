import { Logo, Nav, StyledHeader, LogoLink, StyledNavLink } from "../../styles/Header/Header.styled";

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
                    <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
                </div>
                {user?._id
                    ? <div>
                        <StyledNavLink to={'/profile'}>Profile</StyledNavLink>
                        <StyledNavLink to={'/create'}>Create</StyledNavLink>
                        <StyledNavLink onClick={onLogoutHandler} to={'/logout'}>Logout</StyledNavLink>
                    </div>
                    : <div>
                        <StyledNavLink to={'/login'} >Login</StyledNavLink>
                        <StyledNavLink to={'/register'} >Register</StyledNavLink>
                    </div>
                }
            </Nav>
        </StyledHeader>
    );
};