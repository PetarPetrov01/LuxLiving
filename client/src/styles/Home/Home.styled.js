import styled from "styled-components";

export const HomeWrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;
    margin: 40px auto;
    gap: 10px;
    width: 60%;
    min-height: 70vh;
    border-radius: 15px;
    background: rgba(40, 60, 99,0.8); 
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    & > h1 {
        font-size : 2em;
    }
    & > p{
        margin: 20px;
        text-align: justify;
        font-size: 1.5em;
    }

`;    display:flex;
    justify-content: center;
    width: 80%;
    border-top: 2px solid rgb(203, 179, 106);

    & > h1 {
        font-size: 2em;
    }
`;

export const LatestWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 15vw;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        height: min(90vh,900px);
        width: 80%;
    }
`;

export const StyledHomeCard = styled.div.attrs((props) => ({
    width: props.width,
    height: props.height
}))`
    width: ${({ width }) => `${width}%`};
    transition: all 0.3s;

    &:hover{
        width: ${({ width }) => `${width + 5}%`}; 
    }

    @media(max-width: 768px){
        width: 80%;
        height: ${({ height }) => `${height}%`}; 

        &:hover{
            width: 80%;
            height:${({ height }) => `${height + 5}%`};
        }
    }
`;

export const InfoWrapper = styled.div`
