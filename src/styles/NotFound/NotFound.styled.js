import styled from "styled-components";
import { StyledLink } from "../Home/Home.styled";

export const Styled404 = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 40px auto;
    padding: 20px 10px;
    width: max(60%,650px);
    min-height: 200px;
    border-radius: 15px;
    background: ${props=>props.theme.white(0.3)};

    @media(max-width: 768px){
        //height: 90vh;
        width: 80%;
    } 
`;

export const NotFoundCard = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    border-radius:20px;

    width: 95%;
    background: rgba(173, 69, 49,0.8);
`;

export const ImageWrapper404 = styled.div`
    width: 100%;
    border-radius:20px;
    
    img{
        border-radius:20px;
        object-fit: cover;
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
    font-size: max(2.4vw,20px);
    text-align: center;
    width: 80%;

    p{
        margin: 10px;
        }
`;

export const Link404 = styled(StyledLink)`
    font-size: max(2vw,18px); 

    &:hover{
        color: rgb(80, 250, 59);
    }
`;