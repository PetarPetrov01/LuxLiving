import styled from "styled-components";

export const ErrorContainer = styled.div`
    position: fixed;
    right: 70px;
    min-width: 120px;
    display: block;
    z-index: 11111;
    top: 70px;
    text-align: center;
    background: rgba(255, 255, 255,0.8);
    border-radius: 20px;
    animation: fade 1s ease-out 3s;

    p{
        font-size: 24px;
        padding: 5px 15px;
        margin: 0;
        height: auto;
        color: rgb(255, 79, 79);
        border-radius: 20px;
    }

    @media (max-width: 768px){
        min-width: 250px;
        top: 100px;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    @keyframes fade {
    to {
        opacity: 0;
    }
}
`;