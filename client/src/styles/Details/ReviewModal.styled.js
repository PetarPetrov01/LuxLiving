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
    background-color: rgba(55, 82, 135,0.7);
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
    width: 70%;
    height: 80%;
    border-radius: 20px;
    padding: 10px;
    background-color: rgba(255,255,255,0.9);
    `;

export const ReviewForm = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 95%;
    gap: 20px;
    font-size: 1.2em;
    color:rgb(40, 60, 99);

    h1{
        margin-top: 0;
    }
    `;

export const RatingContainer = styled.div`

span{
    margin-right: 10px;
    color: rgb(40, 60, 99);
}
`;

export const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    resize: vertical;
    min-height: 80px;
    max-height: 250px;
    width: 100%;
    border: 1px solid rgb(40, 60, 99);
    border-radius: 10px;
    outline: none;
    padding: 4px;
    `;

export const SubmitReviewBtn = styled.button`
    width: 30%; 
    height: 30px;
    padding: 0;
    background: rgba(55, 82, 135,0.7);
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
