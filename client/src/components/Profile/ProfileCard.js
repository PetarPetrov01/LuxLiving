import { usePropertyContext } from "../../contexts/PropertyContext";
import { ProfileImageWrapper, ProfileInfoWrapper, ProfileStyledCard, ProfileDetails, ProfileLink, ProfileControlls } from "../../styles/Profile/Profile.styled";

export const ProfileCard = ({
    _id,
    _ownerId,
    name,
    imageUrl,
    location,
    area,
    price,
    description,
    userId
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
                    <h3>Price ${Number(price).toLocaleString()}</h3>
                    <h3>Total area: {area} m<sup>2</sup></h3>
                    <p><span>Property description:</span> {description}</p>
                </ProfileDetails>

                {_ownerId === userId
                    ? <ProfileControlls>
                        <ProfileLink to={`/catalog/${_id}/edit`}> Edit</ProfileLink>
                        <ProfileLink onClick={(e) => onDeleteHandler(e, _id)}>Delete</ProfileLink>
                    </ProfileControlls>
                    : null}


            </ProfileInfoWrapper>
        </ProfileStyledCard>
    );
};