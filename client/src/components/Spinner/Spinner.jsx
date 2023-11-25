import { SpinnerLogo, StyledSpinner, StyledSpinnerWrapper } from "../../styles/Spinner/Spinner.styled";

export const Spinner = ({style}) => {

    return (
        <StyledSpinnerWrapper style={style}>
            <SpinnerLogo src="/images/spinner-logo.png" loading="eager"/>
            <StyledSpinner />
        </StyledSpinnerWrapper>
    );
};