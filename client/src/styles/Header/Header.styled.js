import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-self: center;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(186, 226, 248,0.5) 0%, rgba(128, 220, 240,0.5)100%);
    padding: 0.4em 2.2em;
    width: 95vw;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgb(138, 191, 234);
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(10, 133, 241);
    font-weight: 400;
    transition: transform 0.5s;
    padding: 0 10px;
    text-decoration: none;

    &:hover{
        color: rgb(200,180,20);
        transform: scale(1.1)
    }
`;