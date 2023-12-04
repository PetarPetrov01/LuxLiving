import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    min-height: 55vh;
    padding: 40px 20px;
    margin: 20px auto 80px auto;
    border-radius: 15px;
    background: ${props => props.theme.darkerBlue(0.8)};
    box-shadow: 0px 0px 16px ${props => props.theme.darkerBlue()};

    & > button{
        width: 40%;
        height: 40px;
        margin-top: 40px;
        background-color: rgba(107, 204, 238, 0.8);
        box-shadow: 0px 0px 8px rgba(147, 244, 278, 0.8);
        cursor: pointer;
        border:none;
        border-radius: 20px;
        color: white;
        font-size: 1.3em;
        transition: all 0.2s;

        &:hover{
            background-color: rgba(53, 165, 255, 0.8);
        }
    }

    @media (max-width: 768px){
        width: 80%;
    }
`;

export const InputWrapper = styled.div`
    display: ${props => props.errors ? 'block' : 'flex'};  
    align-items: center;
    margin-top: 30px;
    width: 60%;
    background-color: rgb(220,230,250);
    border-radius: 10px;

    & > p{
        position: absolute;
        font-weight: bold;
        color: #f66;
        margin: 0;
    }

    @media (max-width: 768px) {
            width: 70%;
    }
`;

export const CreateInputWrapper = styled(InputWrapper)`
    display: block;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 1.3em;
    border: none;
    border-radius: 10px;
    padding-left: 4px;
    background-color: rgb(220,230,250);

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: #999;
    }

    &:disabled{
        color: #999;
    }
   
`;

export const StyledTextArea = styled.textarea`
box-sizing: border-box;
    width:100%;
    resize: vertical;
    height: 80px;
    min-height: 60px;
    max-height: 200px;
    font-size: 1.3em;
    background-color: rgb(220,230,250);
    border-radius: 10px;
    padding-left: 4px;

    &::placeholder{
        color: #999;
    }
`;

export const FormAnchor = styled(Link)`
    text-decoration: none;
    color: rgb(127, 234, 258);

    &:hover{
        text-decoration: underline;
    }
`;