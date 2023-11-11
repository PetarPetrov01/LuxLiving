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

