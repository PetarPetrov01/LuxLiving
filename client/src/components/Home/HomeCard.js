import { ImageWrapper, InfoWrapper, StyledAnchor, StyledHomeCard } from "../../styles/Home/Home.styled";

export const HomeCard = ({
    name,
    imageUrl,
    location,
    _id,
    count
}) => {

    return (
        <StyledHomeCard width={count < 3 ? 40 : 32} height={count < 3 ? 40 : 30}>
            <ImageWrapper>
                <img src={imageUrl} alt={name} />
            </ImageWrapper>
            <InfoWrapper>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <StyledAnchor to={`/catalog/${_id}/details`}>Details</StyledAnchor>
            </InfoWrapper>
        </StyledHomeCard>
    );
};

