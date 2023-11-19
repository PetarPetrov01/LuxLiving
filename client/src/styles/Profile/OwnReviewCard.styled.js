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
    background-color: rgba(255,255,255,0.8);
    padding: 5px 10px;
    border-radius: 10px;
    color: rgb(40, 60, 99);
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

