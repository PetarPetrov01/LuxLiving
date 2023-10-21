import styled from "styled-components";

export const StyledCatalog = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    width: 75%;
    background: linear-gradient(45deg, rgba(40, 60, 99,0.6) 0%, rgba(55, 82, 135,0.6)50%);
    border-radius: 20px;
   `;

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ flexdir }) => flexdir || 'row'};
    padding: 20px;
    margin: 20px;
    gap: 10px;
    width: 80%;
    border-radius: 15px;
    // background: rgba(72, 109, 181,0.7);
    // box-shadow: 0px 0px 16px rgb(80, 109, 181);
    background: rgba(255,255,255,0.7);
    box-shadow: 0px 0px 16px rgb(255,255,255);

    @media (max-width: 780px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex: 1;

    img{
        display: block;
        border: 4px solid #777;
        box-shadow: 0 0 20px #888;
        border-radius: 4px;
        width: 100%;
        transition: all 0.3s;
    }

    a{
        width:85%;
    }

    a:hover img{
        opacity: 0.8;
        border: 4px solid rgba(217, 191, 113,0.8);
        box-shadow: 0 0 20px rgba(203, 179, 106,0.8);
    }

    @media (max-width: 780px){
        flex: 1;
        justify-content: center;
        width:100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: rgb(40, 60, 99);
    flex: 1;
    

    h3{
        font-size: 2vw;
        height: 30%;
    }

    @media (max-width: 780px){
        flex: 1;
        height: 80%;
    }
`;

