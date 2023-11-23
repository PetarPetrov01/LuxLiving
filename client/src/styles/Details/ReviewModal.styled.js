import styled from "styled-components";

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    overflow: hidden;
    background-color: ${props => props.theme.darkerBlue(0.7)};
    `;

export const CloseModalButton = styled.button`
        align-self: flex-end;
        border: none;
        height: 30px;
        padding: 0;
        background-color: transparent;
        font-size: 1.6em;  
        cursor: pointer;

        &:hover{
            color: rgb(120, 130, 140);
        };
    `;

export const ReviewWrapper = styled.div`
    width: 60%;
    height: 70%;
    border-radius: 20px;
    padding: 10px;
    background-color: ${props => props.theme.white(0.8)};

    @media (max-width: 768px){
        width: 90%;
        height: 80%;
    }
    `;

export const ReviewForm = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
    gap: 20px;
    font-size: 1.2em;
    color: ${props => props.theme.mainBlue()};

    h1{
        margin-top: 0;
    }

    h3{
        margin-bottom: 5px;
        margin-top: 5px;
    }

    @media (max-width: 768px){
        justify-content: center;
        align-items: center;
    }
    `;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span{
        margin-right: 10px;
        color: ${props => props.theme.mainBlue()};
    }

    select{
        height: 30%;
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const ReviewContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    resize: vertical;
    min-height: 80px;
    max-height: 200px;
    width: 100%;
    border: 1px solid ${props => props.theme.mainBlue()};
    border-radius: 10px;
    outline: none;
    padding: 4px;
    `;

export const ReviewControls = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;

    `;

export const SubmitReviewBtn = styled.button`
    height: 30px;
    padding: 0 10px;
    background: ${props => props.theme.darkerBlue(0.7)};
    border: none;
    border-radius:20px;
    text-decoration:none;
    font-size: 1.2em;
    transition: all 0.2s;
    color: white;
    cursor: pointer;
    
    &:hover{
        background-color: rgba(53, 125, 200, 0.8);
        }
`;

export const DeleteReviewBtn = styled(SubmitReviewBtn)`
    &:hover{
        background-color: rgba(255, 80, 60, 0.8); 
    }
`;
