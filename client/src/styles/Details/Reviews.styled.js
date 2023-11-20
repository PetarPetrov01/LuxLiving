import styled from "styled-components";

export const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    margin: 30px;
    padding: 20px 10px;
    width: 85%;
    max-width: 800px;
    border-radius: 15px;
    background: ${props=>props.theme.white(0.7)};
    box-shadow: 0 0 10px ${props=>props.theme.white(0.7)};
    color: ${props=>props.theme.mainBlue()};
`;

export const ReviewHeading = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(55, 82, 135);
    `;

export const AddReviewBtn = styled.button`
    background: rgba(55, 82, 135,0.7);
    border: 1px solid rgba(53, 125, 200, 0.8);
    border-radius: 20px;
    padding: 4px 10px;
    text-decoration:none;
    font-size: 1.2em;
    transition: all 0.3s;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: rgba(53, 125, 200, 0.8);
        box-shadow: 0 0 3px rgb(53, 125, 200);
    }   
`;

export const ReviewCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px solid rgb(55, 82, 135);
    background-color: ${props=>props.theme.white(0.5)};
    `;

export const ReviewStyledCard = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    min-height: 80px;
    padding: 15px;
    border-bottom: 1px solid rgb(55, 82, 135);

    h4{
        margin-bottom: 0;
        margin-top: 10px;
    }
    
    h3, p{
        margin-bottom: 2px;
        margin-top: 10px;
    }
    `;

export const ReviewCreatorInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 0px 10px;
    border-bottom: 2px solid rgb(55, 82, 135);
`;