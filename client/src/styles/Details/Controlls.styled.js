import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledControlls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 20px;
    margin: 10px 0 20px 0;

    h4{
        margin: 5px 0;
    }
`;

export const OwnerControlls = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    gap: 20px;
    margin: 10px 0 20px 0;
`;

export const StyledAnchor = styled(Link)`
    color: white;
    cursor: pointer;
    width: 30%;
    height: 40px;
    border: none;
    border-radius: 20px;
    font-size: 1.3em;
    text-align: center;
    line-height: 40px;
    text-decoration:none;
    background: rgba(55, 82, 135,0.7);
    transition: all 0.2s;
    
    &:hover{
        box-shadow: 0px 0px 3px rgba(55, 125, 200, 0.8);
        background-color: rgba(53, 125, 200, 0.8);
    }

    @media (max-width: 768px){
        width: 40%;
    }
`;

export const StyledBidForm = styled.form`
    display: flex;
    width:60%;
    border: 1px solid rgba(55, 125, 200, 0.8);
    border-radius: 20px;
`;

export const BidInput = styled.input`
    flex: 2;
    width: 60%;
    font-size: 1.1em;
    background-color: rgb(220,230,250);
    border-radius: 20px 0 0 20px;
    outline: none;
    border: none;
    padding: 0 0 0 10px;

    &::placeholder{
        color: #999;
    }  
`;

export const BidButton = styled.button`
    flex: 1;
    color: white;
    cursor: pointer;
     height: 100%;
    width: 38%; 
    
    
    border: none;
    padding: 0;
    border-radius: 0 20px 20px 0;
    font-size: 1.2em;
    line-height: 40px;
    text-decoration:none;
    background: rgba(55, 82, 135,0.7);
    transition: all 0.2s;
    
    &:hover{
        box-shadow: 0px 0px 3px rgba(55, 125, 200, 0.8);
        background-color: rgba(53, 125, 200, 0.8);
    }

    @media (max-width: 768px){
        width: 40%;
    }  
`;