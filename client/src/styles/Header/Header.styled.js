import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(40, 60, 99,0.9) 0%, rgba(55, 82, 135,0.9)50%);
    padding: 0.2em 2.2em;
    width: 95vw;
    box-shadow: 0px 0px 10px rgb(138, 191, 234);

    @media (max-width: 780px){
        flex-direction: column;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid rgb(203, 179, 106);

    @media (max-width: 780px){
        flex-direction: column;
        width: 90%;

        & > div{
            display: flex;
            flex-direction: column;
        }
    }
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(255,255,255);
    font-weight: 400;
    transition: transform 0.5s;
    padding: 0 10px;
    margin: 8px;
    text-decoration: none;
    border-radius: 4px;

    &:hover{
        color: rgb(203, 179, 106);
        transform: scale(1.1)
    }

    @media (max-width: 780px){
        margin-bottom: 10px;
    }
`;

export const LogoLink = styled(Link)`
    height: 100%;
    max-width: 20%;
    border-radius: 10px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 780px){
        max-width: 60%;
    }
`;

export const Logo = styled.img`
    min-height: 100%;
    width: 100%;

    @media (max-width: 780px){
        height: 100%;
        margin: auto;
    }
    `;