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
    }
`;

export const LimitContainer = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    align-self: stretch;
    display:flex;
`;

export const Spacer = styled.div`
    flex: 1;

    @media(max-width: 1100px){
        flex:0;
    }
`;

export const LimitSelection = styled(StyledSelect)`
    height: 30px;
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
    background-color: rgba(255,255,255,0.6);
    border-radius: 20px;
    color: rgb(40, 60, 99);   
`;

export const PageButton = styled.button`
    font-size: 1em;
    background: none;
    border: none;
    color: rgb(40, 60, 99);

    &:hover{
        cursor: pointer;
        color: rgb(203, 179, 106)
    }

    &:disabled {
        color: rgb(120, 150, 170);
        &:hover{
            cursor: default;
        }
    }
`;