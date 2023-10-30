import styled from "styled-components";
import { DetailsInfo } from "../Details/Details.styled";

export const ProfileContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px;
    margin: 40px auto;
    width: max(70%,650px);
    min-height: 70vh;
    border-radius: 15px;
    background: rgba(40, 60, 99,0.7); 
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    @media(max-width: 768px){
        
        //height: 90vh;
        width: 80%;
    }
`;

export const PropertiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    width: 100%;
    min-height: 15vw;
    margin-bottom: 20px;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        //height: 90vh;
        width: 100%;
    }
`;

export const ProfileStyledCard = styled.div`
    width: max(80%,500px);
    height: max(30vw,290px);
    transition: all 0.3s;

    @media(max-width: 768px){
        height: 40vw;
        width: 90%;
        
        &:hover{
            height: 45vw;
            width: 90%;
        };
    }
`;

