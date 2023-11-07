import styled from "styled-components";

export const StyledCatalog = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px auto 80px auto;
    width: max(75%,700px);
    min-height: 200px;
    border-radius: 20px;
    background: linear-gradient(45deg, rgba(40, 60, 99,0.6) 0%, rgba(55, 82, 135,0.6)50%);

    @media (max-width:768px){
        width: 90%;
    }
`;

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ flexdir }) => flexdir};
    padding: 20px;
    margin: 20px;
    gap: 10px;
    width: max(80%,600px);
    height: max(18vw,200px);
    max-height: 270px;
    border-radius: 15px;
    background: rgba(255,255,255,0.7);
    box-shadow: 0px 0px 4px rgb(255,255,255);

    @media (max-width: 768px) {
        max-height: none;
        width: 80%;
        height: auto;
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;

    img{
        padding: none;
        border: 4px solid rgba(55, 82, 135,0.8);
        object-fit: cover;
        box-shadow: 0 0 5px rgb(40, 60, 99);
        border-radius: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        transition: all 0.3s;
    }

    a{
        width:95%;
        height:95%
    }

    a:hover img{
        opacity: 0.8;
        border: 4px solid rgba(217, 191, 113,0.8);
        box-shadow: 0 0 20px rgba(203, 179, 106,0.8);
    }

    @media (max-width: 768px){
        justify-content: center;
        width:100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100%;
    color: rgb(40, 60, 99);
    flex: 1;
    font-size: 1.1em;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
}
`;

export const CardHeaders = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    
    h1{
        font-size: max(2.1vw,24px);
        margin: 10px 0 5px 0;
    }
    
    h2{
        font-size: max(1.7vw,20px);
        margin: 5px 0 5px 0;
    }

    @media (max-width: 768px){
        border-bottom: 2px solid rgb(55, 82, 135);
    }

    @media (min-width: 1800px){
        h1{
            font-size: 38px;
        }

        h2{
            font-size: 32px;
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    margin-top:0.5vw;
    height: 40%;
    min-height: 25%;
    font-size: 1.3em;

    span{
        font-size: max(1vw, 20px);
        margin: 0;
    }

    @media (max-width: 768px){
        margin-top: 10px;
    }

    @media (min-width: 1800px){
        span{
            font-size: 25px;
        }
    }
`;

export const ControlsWrapper = styled.div`
    height: 37px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 20px 0;

    @media (max-width: 768px){
        flex-direction: column;
        width: 90%;
        height: 70px;
        gap: 5px;
        margin-bottom: 10px;
    }

`;

export const SearchForm = styled.form`
    display: flex;
    height: 100%;
    width: 60%;
    align-items: center;
    margin: 0;
    font-size: 1.2em;
    
    input[name="search"]{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 18px;
        padding-left: 10px;
        font-size: inherit;

        &::placeholder{
            margin-left: 5px;
        }
    }

    @media (max-width: 768px){
        font-size: 1.1em;
        height: 50%;
        width: 50%;
    }
`;

export const SortWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2em;

    @media (max-width: 768px){
        height: 50%;

        font-size: 1.1em;
    }
`;

export const StyledSelect = styled.select`
    height: 100%;
    border-radius: 18px;
    margin: 0; 
    margin-left: 4px;
    padding-left: 10px;   
    font-size: inherit;
`;

