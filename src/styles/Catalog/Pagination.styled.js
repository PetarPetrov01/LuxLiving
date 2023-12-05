import styled from "styled-components";
import { StyledSelect } from "./Catalog.styled";

export const PaginationContainer = styled.div`
    width:80%;
    height: 37px;
    display:flex;
    justify-content: space-between;
    font-size: 1.2em;

    @media(max-width: 768px){
        font-size: 1.1em;
        width: 90%;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        gap: 10px;
    }
`;

export const LimitContainer = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    align-self: stretch;
    display:flex;

    @media(max-width: 768px){
        justify-content:center;
    };
`;

export const Spacer = styled.div`
    flex: 1;

    @media(max-width: 1100px){
        flex:0;
    }
`;

export const LimitSelection = styled(StyledSelect)`
box-sizing: border-box;
    height: 30px;

    @media(max-width: 768px){
        height: max(5vw,22px);
        margin-bottom: 0;
    }
`;

export const PagesWrapper = styled.div`
    flex: 1;
    width: 60%;
    align-self: center;
    height:100%;
    display:flex;
    justify-content: space-around;
    gap: 5px;
    align-items:center;
    background-color: ${props=>props.theme.white(0.6)};
    border-radius: 20px;
    /* color: rgb(40, 60, 99);    */
    color: ${props=>props.theme.mainBlue()};  

    @media(max-width: 768px){
        width: 90%;
        height: max(5vw, 30px);
        font-size: 16px;
        align-items: center;
    }
`;

export const PageButton = styled.button`
    font-size: 1em;
    background: none;
    border: none;
    color: ${props=>props.theme.mainBlue()};

    &:hover{
        cursor: pointer;
        color: ${props=>props.theme.mainYellow()};
    }

    &:disabled {
        color: rgb(120, 150, 170);
        &:hover{
            cursor: default;
        }
    }
`;