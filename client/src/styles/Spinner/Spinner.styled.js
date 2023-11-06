import styled from "styled-components";

export const StyledSpinnerWrapper = styled.div`
    box-sizing: border-box;
    width: 68px;
    height: 68px;
`;

export const SpinnerLogo = styled.img`
    height: 100%;
    width: 100%;
    position: relative;
    object-fit: cover;

    animation: scaling 1s infinite linear;

    @keyframes scaling {
    0% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.2);
    }

    100%{
        transform: scale(1);
    }
}
`;

export const StyledSpinner = styled.span`
    
    position: relative;
    top: -100%;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 4px solid;
    border-right: 4px solid;
    border-left: 4px solid;
    border-color: rgb(223, 189, 116) transparent;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;