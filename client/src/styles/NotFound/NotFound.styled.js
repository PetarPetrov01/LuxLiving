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
    /*background: linear-gradient(45deg, rgba(40, 60, 99,0.6) 0%, rgba(55, 82, 135,0.6)50%);  */
    background: rgba(255,255,255,0.3);

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

