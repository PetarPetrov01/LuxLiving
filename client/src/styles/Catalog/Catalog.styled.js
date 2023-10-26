import styled from "styled-components";

export const StyledCatalog = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    width: 75%;
    min-height: 200px;
    background: linear-gradient(45deg, rgba(40, 60, 99,0.6) 0%, rgba(55, 82, 135,0.6)50%);
    border-radius: 20px;

    @media (max-width:780px){
        width: 90%;
    }
   `;

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ flexdir }) => flexdir || 'row'};
    padding: 20px;
    margin: 20px;
    gap: 10px;
    width: 80%;
    height: 18vw;
    max-height: 270px;
    border-radius: 15px;
    background: rgba(255,255,255,0.7);
    box-shadow: 0px 0px 4px rgb(255,255,255);

    @media (max-width: 780px) {
        max-height: none;
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
        border: 4px solid #777;
        object-fit: cover;
        box-shadow: 0 0 20px #888;
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

    @media (max-width: 780px){
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

    @media (max-width: 780px){
        width: 100%;
        height: 100%;
}
`;


    h3{
        font-size: 2vw;
        height: 30%;
    }

    @media (max-width: 780px){
        flex: 1;
        height: 80%;
    }
`;

