import { Link } from "react-router-dom";
import { StyledCard, ImageWrapper, InfoContainer, CardHeaders, TextContainer } from "../../styles/Catalog/Catalog.styled";
import { formatDate } from "../../utils/dateFormatter";

export const CatalogCard = ({
    name,
    location,
    area,
    price,
    imageUrl,
    _id,
    _createdOn,
    flexdir
}) => {

    const created = formatDate(_createdOn,'catalog');

    return (
        <StyledCard flexdir={flexdir}>
            <ImageWrapper>
                <Link to={`${_id}/details`}>
                    <img
                        src={imageUrl}
                        alt={name} />
                </Link>
            </ImageWrapper>
            <InfoContainer>
                <CardHeaders>
                    <h1>{name}</h1>
                    <h2>Location: {location}</h2>
                </CardHeaders>
                <TextContainer>
                    <span>Price: ${price}</span>
                    <span>Total area: {area} m<sup>2</sup></span>
                </TextContainer>
            </InfoContainer>
        </StyledCard>

    );
};