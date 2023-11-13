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
    createdAt,
    flexdir
}) => {

    const posted = formatDate(createdAt, 'catalog');

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
                    <span style={{fontSize: '0.75em'}}>Posted on: {posted}</span>
                </CardHeaders>
                <TextContainer>
                    <span>Starting price: ${Number(price).toLocaleString()}</span>
                    <span>Total area: {area} m<sup>2</sup></span>
                </TextContainer>
            </InfoContainer>
        </StyledCard>
    );
};