import { useParams } from "react-router-dom";
import { DetailsCard, DetailsCardHeaders, DetailsImageWrapper, DetailsInfo, 
    DetailsInfoWrapper, StyledAnchor, StyledControlls, StyledDetails } from "../../styles/Details/Details.styled";
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertiesService";
import { useUserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/dateFormatter";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Details = () => {

    const { onDeleteHandler } = usePropertyContext();
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const { user } = useUserContext();

    useEffect(() => {
        propertyService.getById(id)
            .then(res => {
                setProperty(res);
            }).catch(err => {
                alert(err);
            });
    }, [id]);

    const isOwner = user._id === property._ownerId;
    const created = formatDate(property._createdOn, 'details');

    return (
        <StyledDetails>
            <DetailsCard>
                <DetailsImageWrapper>
                    <img src={property.imageUrl} alt={property.name} />
                </DetailsImageWrapper>
                <DetailsInfoWrapper>
                    <DetailsCardHeaders>
                        <h1>{property.name}</h1>
                        <h2>{property.location}</h2>
                    </DetailsCardHeaders>
                    <DetailsInfo>
                        <h4>Total area: {property.area} m<sup>2</sup></h4>
                        <h4>Price: ${Number(property.price).toLocaleString()}</h4>
                        <p>{property.description}</p>
                    </DetailsInfo>
                    {user._id ?
                        <StyledControlls>
                            {isOwner ?
                                <>
                                    <StyledAnchor to={`/catalog/${property._id}/edit`}> Edit</StyledAnchor>
                                    <StyledAnchor onClick={(e) => onDeleteHandler(e, id)}>Delete</StyledAnchor>
                                </>
                                : <StyledAnchor>Rent</StyledAnchor>
                            }
                        </StyledControlls>
                        : null}
                    <span>Posted on: {created}</span>
                </DetailsInfoWrapper>
            </DetailsCard >
        </StyledDetails >
    );

};