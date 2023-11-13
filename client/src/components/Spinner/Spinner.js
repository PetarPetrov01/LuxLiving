import { SpinnerLogo, StyledSpinner, StyledSpinnerWrapper } from "../../styles/Spinner/Spinner.styled";

export const Spinner = () => {


    return (
        <StyledSpinnerWrapper>
            <SpinnerLogo src="/images/spinner-logo.png"/>
            <StyledSpinner />
        </StyledSpinnerWrapper>
    );
};