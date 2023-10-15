import styled from "styled-components";

export const StyledForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;
    margin: 20px auto;
    gap: 10px;
    width: 60%;
    min-height: 60vh;
    border-radius: 15px;
    background: rgba(210,230,250,0.9);
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    & > button{
        color: white;
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
`;

export const StyledInput = styled.input`
    margin-top: 30px;
    font-size: 1.3em;
    width: 60%;
    height: 40px;
    background-color: rgb(220,230,250);
    border-radius: 10px;
`;