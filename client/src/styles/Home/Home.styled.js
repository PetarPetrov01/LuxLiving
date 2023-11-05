import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px;
    margin: 40px auto 80px auto;
    gap: 10px;
    width: 70%;
    min-height: 400px;
    border-radius: 15px;
    background: rgba(40, 60, 99,0.8); 
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    & > p{
        margin: 20px;
        text-align: justify;
        font-size: 1.5em;
    }

    @media(max-width: 920px){
        width: 80%;
    }
`;

export const HeaderWrapper = styled.div`
    display:flex;
    justify-content: center;
    width: 80%;
    border-top: 2px solid rgb(203, 179, 106);

    & > h1 {
        font-size: 2em;
        text-align: center;
    }
`;

export const LatestWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: min(15vw,400px);

    @media(max-width: 920px){
        flex-direction: column;
        align-items: center;
        height: min(90vh,900px);
        width: 85%;
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

    @media(max-width: 920px){
        width: 90%;
        height: ${({ height }) => `${height}%`};

        &:hover{
            width: 90%;
            height:${({ height }) => `${height + 5}%`};
        };
    };
`;

export const InfoWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: -100%;
    width: 100%;
    height:100%;
    opacity: 0;
    border-radius:10px;
    color: rgb(40, 60, 99);

    //background-color: rgba(203, 179, 106,0.7);
     background-color: rgba(190,210,250,0.9); 
    transition: opacity 0.3s;

    &:hover{
        opacity: 1;      
    }

    h1{
        margin-bottom: 0;
    }

    h2{
        margin-top: 0;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height:100%;
    img {
        padding: none;
        border: 2px solid #bbb;
        object-fit: cover;
        border-radius: 10px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        transition: all 0.3s;

        &:hover{
            width: 120%;
            opacity: 1;
        }
    }
`;

export const StyledAnchor = styled(Link)`
    text-decoration: none;
    font-size: 1.4em;
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    border-bottom: 2px solid white;
    background: rgba(40, 60, 99,0.8); 
    transition: all 0.2s;

    &:hover{
        background: rgba(40, 60, 99,0.6); 
    }
`;

export const LinkWrapper = styled.div`
    display:flex;
    justify-content: center;
    width: 80%;
    border-bottom: 2px solid rgb(203, 179, 106);
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(255,255,255);
    font-weight: 450;
    transition: all 450ms;
    padding: 0 10px;
    margin: 8px;
    text-decoration: none;

    &:hover{
        color: rgb(203, 179, 106);
        transform: scale(1.1);
    }

    @media (max-width: 920px){
        margin-bottom: 10px;
    }
`;


