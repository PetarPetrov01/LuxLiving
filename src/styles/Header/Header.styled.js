import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(40, 60, 99,0.9) 0%, ${props=>props.theme.darkerBlue(0.9)} 50%);
    padding: 0;
    width: 100%;
    box-shadow: 0px 0px 10px rgb(138, 191, 234);

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid ${props=>props.theme.mainYellow()};

    .active{
        color: ${props=>props.theme.mainYellow()};
        transform: scale(1.1);
    }

    @media (max-width: 768px){
        flex-direction: column;
        width: 90%;

        & > div{
            display: flex;
            flex-direction: column;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${props=>props.theme.white()};
    font-weight: 450;
    transition: all 450ms;
    padding: 0 10px;
    margin: 8px;
    text-decoration: none;

    &:hover{
        color: ${props=>props.theme.mainYellow()};
        transform: scale(1.1);
    }

    @media (max-width: 768px){
        font-size: max(3.8vw,18px);
        margin-bottom: 10px;
    }
`;

export const LogoLink = styled(NavLink)`
    height: 100%;
    max-width: 20%;
    border-radius: 10px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px){
        max-width: 60%;
    }
`;

export const Logo = styled.img`
    min-height: 100%;
    width: 100%;

    @media (max-width: 768px){
        height: 100%;
        margin: auto;
    }
    `;