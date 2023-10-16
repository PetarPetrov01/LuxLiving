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
    background: rgba(210,230,250,0.9);
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    & > h1 {
        font-size : 2em;
    }
    & > p{
        margin: 20px;
        text-align: justify;
        font-size: 1.5em;
    }

`;