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
    background: rgba(255,255,255,0.7);
    box-shadow: 0 0 10px rgba(255,255,255,0.7);
    color: rgb(40, 60, 99);
`;

export const ReviewHeading = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 2px solid rgb(55, 82, 135);
    button{
        height: 25px;
    }
`;

export const ReviewCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px solid rgb(55, 82, 135);
    background-color: rgb(255,255,255,0.5);
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