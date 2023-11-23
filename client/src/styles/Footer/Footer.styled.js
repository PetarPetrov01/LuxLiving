import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, ${props=>props.theme.mainBlue(0.9)} 0%, ${props=>props.theme.darkerBlue(0.9)} 50%);
    padding: 0;
    width: 100%;
    height: 40px;
    box-shadow: 0px 0px 10px rgb(138, 191, 234);
`;