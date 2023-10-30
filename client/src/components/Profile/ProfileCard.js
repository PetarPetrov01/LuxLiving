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
                <img src={imageUrl} alt={name}></img>
            </ProfileImageWrapper>
            <ProfileInfoWrapper>
                <ProfileDetails>
                    <h1>{name}</h1>
                    <h2>{location}</h2>
                    <h3>Total area: {area} m<sup>2</sup></h3>
                    <h3>Price: ${Number(price).toLocaleString()}</h3>
                    <p><span>Property description:</span> {description}</p>
                </ProfileDetails>

                <StyledControlls>
                    <StyledAnchor to={`/catalog/${_id}/edit`}> Edit</StyledAnchor>
                    <StyledAnchor onClick={(e) => onDeleteHandler(e, _id)}>Delete</StyledAnchor>
                </StyledControlls>

            </ProfileInfoWrapper>
        </ProfileStyledCard>
    );
};