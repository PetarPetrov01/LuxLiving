import { useParams } from "react-router-dom";
import {
    DetailsCard, DetailsCardHeaders, DetailsImageWrapper, DetailsInfo,
    DetailsInfoWrapper, StyledDetails
} from "../../styles/Details/Details.styled";
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertiesService";
import { useUserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/dateFormatter";
import { Controlls } from "./Controlls";
import { mockDelay } from "../../utils/mockDelay";

export const Details = () => {

    const { id } = useParams();
    const [property, setProperty] = useState({});
    const { user } = useUserContext();

    useEffect(() => {
        propertyService.getById(id)
            .then(res => {
                setProperty(res);
                //Mock delay
                mockDelay(2000,
                    () => setProperty(res),
                    () => setIsLoading(false)
                );
            }).catch(err => {
                alert(err);
            });
    }, [id]);

    const isOwner = user._id === property._ownerId;
    const created = formatDate(property.createdAt, 'details');

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
                        <h4>Current price: ${Number(property.price).toLocaleString()}</h4>
                        <p>{property.description}</p>
                    </DetailsInfo>
                    {user._id ?
                        <Controlls
                            isOwner={isOwner}
                            currentBidder={property.currentBidder}
                            price={property.price}
                            propId={property._id} />
                        : null}
                    <span>Posted on: {created}</span>
                </DetailsInfoWrapper>
            </DetailsCard >
        </StyledDetails >
    );

};