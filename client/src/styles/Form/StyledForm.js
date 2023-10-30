import styled from "styled-components";

export const StyledForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;
    margin: 20px auto;
    width: 60%;
    min-height: 55vh;
    border-radius: 15px;
    background: rgba(55, 82, 135,0.8);
    box-shadow: 0px 0px 16px rgb(55, 82, 135);

    & > button{
        color: white;
        cursor: pointer;
        background-color: rgba(107, 204, 238, 0.8);
        margin-top: 40px;
        font-size: 1.3em;
        width: 40%;
        height: 40px;
        border:none;
        border-radius: 20px;
        box-shadow: 0px 0px 10px rgba(147, 244, 278, 0.8);

        &:hover{
            background-color: rgba(53, 165, 255, 0.8);
        }
    }

    @media (max-width: 768px){
        width: 80%;
    }
`;

export const InputWrapper = styled.div`
    margin-top: 30px;
    width: 60%;

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

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 1.3em;
    background-color: rgb(220,230,250);
    border-radius: 10px;
    padding-left: 4px;

    &::placeholder{
        color: #999;
    }
   
`;

export const StyledTextArea = styled.textarea`
    width:100%;
    height: 80px;
    font-size: 1.3em;
    background-color: rgb(220,230,250);
    border-radius: 10px;
    padding-left: 4px;

    &::placeholder{
        color: #999;
    }
    `;