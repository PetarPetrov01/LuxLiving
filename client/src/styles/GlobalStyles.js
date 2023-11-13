import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        color: rgb(255, 255, 255);
        background: rgb(205, 235, 255);
        background-image: 
            linear-gradient(94deg, rgba(192, 238, 254,0.5) 0%, rgba(126, 218, 255,0.5) 100%),
            url('/images/luxury-house.webp');
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: Garamond, serif;
    }

    input, button, select{
        font-family: Garamond, serif;
    }

    #root {
        margin: auto;
        height: 100vh;
        width: 100%;
        max-width: 1920px;
        top: 0;
        left: 0;
        background: transparent;
    }

    ::-webkit-scrollbar{
        width: 10px;
        background-color: black;
    }

    * {
        scrollbar-color: rgba(235,235,255,0.8) rgba(40, 60, 99,0.9);
    }
`;