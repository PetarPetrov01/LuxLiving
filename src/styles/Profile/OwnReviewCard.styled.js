import styled from "styled-components";
import { ReviewCreatorInfo } from "../Details/Reviews.styled";
import { Link } from "react-router-dom";
import { StyledAnchor } from "../Details/Controlls.styled";

export const ReviewWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    width: 100%;
    min-height: 16vw;
    margin-bottom: 20px;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        width: 100%;
    }`;

export const ReviewStyledCard = styled.div`
    width: 40%;
    min-height: 350px;
    background-color: ${props => props.theme.white(0.8)};
    padding: 5px 10px;
    border-radius: 10px;
    color: ${props => props.theme.mainBlue()};
    font-size: 1.1em;

    h3{
        margin-top: 10px;
        margin-bottom: 5px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`;

export const ReviewLinkWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    bottom: calc(100% + 5px);
    width: 100%;
    height:100%;
    opacity: 0;
    box-sizing: border-box;
    border: 2px solid ${props=>props.theme.darkerBlue(0.3)};
    border-radius:10px;
    color: ${props => props.theme.mainBlue()};

    background-color: rgba(190,210,230,0.8); 
    transition: opacity 0.5s;
    &:hover{
        opacity: 1;  
    }
`;

export const OwnReviewPropertyInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2,h3{
        margin: 0;
    }
`;


export const ReviewImageWrapper = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 190px;
    border-radius: 10px;
    
    img{
        box-sizing: border-box;
        border: 2px solid ${props=>props.theme.darkerBlue(0.8)}; 
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        transition: all 0.3s;
    }
`;

export const OwnReviewCreatorInfo = styled(ReviewCreatorInfo)`
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;


    h4{
        margin-top: 4px;
        margin-bottom: 4px;
    }
`;

export const PostLink = styled(StyledAnchor)`
    font-size: 1em;
    padding: 0 10px;
    min-width: 95px;
`;

