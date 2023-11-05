import styled from "styled-components";

import { StyledAnchor, StyledControlls } from "../Details/Controlls.styled";
import { DetailsInfo } from "../Details/Details.styled";

export const ProfileContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 40px auto;
    padding: 20px 10px;
    width: max(65%,650px);
    min-height: 200px;
    border-radius: 15px;
    background: linear-gradient(45deg, rgba(40, 60, 99,0.6) 0%, rgba(55, 82, 135,0.6)50%); 

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
    height: max(30vw,300px);
    transition: all 0.3s;

    @media(max-width: 768px){
        height: max(40vw,300px);
        width: 90%;
        
        &:hover{
            height: max(43vw,330px);
            width: 90%;
        };
    }
`;

export const ProfileInfoWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: -100%;
    width: 100%;
    height:100%;
    opacity: 0;
    border-radius:10px;
    color: rgb(40, 60, 99);

    //background-color: rgba(203, 179, 106,0.7);
    background-color: rgba(190,210,250,0.9); 
    transition: opacity 0.5s;

    &:hover{
        opacity: 1;  
    }
    h1{
        font-size: max(30px, 2.2vw);
        margin-bottom: 0;
    }
    h2{
        font-size: max(20px, 1.8vw);
        margin-top: 0;
    }
    h3{
        font-size: max(18px, 1.6vw);
    }
    p{
        font-size: max(17px,1.6vw);
        margin-top: 5px;
    }
`;

export const ProfileImageWrapper = styled.div`
    width: 100%;
    height:100%;

    img {
        padding: none;
        border: 2px solid #bbb;
        object-fit: cover;
        border-radius: 10px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        transition: all 0.3s;
    }
`;

export const ProfileDetails = styled(DetailsInfo)`
    justify-content: space-evenly;
    h1{
        margin: 0;
    }
    h3{
        margin: 5px 0 5px 0;
    }

    span{
        font-weight: bold;
    }
`;

export const ProfileControlls = styled(StyledControlls)`
    flex-direction: row;    
    margin-bottom: 5px;
`;

export const ProfileLink = styled(StyledAnchor)`
    font-size: max(18px,1.6vw);
    padding: max(0,0.1vw) max(10px,1.4vw);
`;

