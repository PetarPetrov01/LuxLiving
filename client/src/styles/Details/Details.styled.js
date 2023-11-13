import styled from "styled-components";

export const StyledDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px auto 60px auto;
    width: 70%;
    min-height: 200px;
    background: rgba(55, 82, 135,0.8);
    border-radius: 20px;

    @media  (max-width: 768px){
        width: 80%;
    }
`;

export const DetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    gap: 10px;
    width: 85%;
    max-width: 800px;
    border-radius: 15px;
    background: rgba(255,255,255,0.7);
    box-shadow: 0 0 10px rgba(255,255,255,0.7);

    @media (max-width: 768px) {
        max-height: none;
        height: auto;
        flex-direction: column;
    }
`;

export const DetailsImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 60%;
    width: 100%;
    flex: 1;

    img{
        padding: none;
        object-fit: cover;
        border-radius: 15px 15px 0px 0px;
        width: 100%;
        height: 28vw;
        transition: all 0.3s;
    }
`;

export const DetailsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    min-height: 100%;
    color: rgb(40, 60, 99);
    flex: 1;
    font-size: 1.1em;
    
    @media (max-width: 768px){
        width: 90%;
        height: 80%;
    }
`;

export const DetailsCardHeaders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    width: 90%;

    border-bottom: 4px solid rgba(55, 82, 135,0.8);
    h1{
        margin: 5px 0 0 0;
    }

    h2{
        margin: 10px 0 10px 0;
    }
`;

export const DetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 90%;
    font-size: 1.2em;

    h4{
        margin: 15px 0px 0px 0px;
    }
    
    p{
        text-align: justify;
    }

    @media (max-width: 768px){
        h3{
            font-size: 0.9em;
        }
    }
`;

