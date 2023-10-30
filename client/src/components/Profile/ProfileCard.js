import { usePropertyContext } from "../../contexts/PropertyContext";
import { StyledAnchor, StyledControlls } from "../../styles/Details/Details.styled";
import { ProfileImageWrapper, ProfileInfoWrapper, ProfileStyledCard, ProfileDetails } from "../../styles/Profile/Profile.styled";

export const ProfileCard = ({
    _id,
    name,
    imageUrl,
    location,
    area,
    price,
    description,
}) => {

    const { onDeleteHandler } = usePropertyContext();

    return (
        <ProfileStyledCard>
            <ProfileImageWrapper>
            </ProfileImageWrapper>
            <ProfileInfoWrapper>
                <ProfileDetails>
                </ProfileDetails>
                <StyledControlls>
                </StyledControlls>

            </ProfileInfoWrapper>
        </ProfileStyledCard>
    );
};