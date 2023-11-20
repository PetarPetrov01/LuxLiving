import { useParams } from "react-router-dom";
import { DetailsCard, DetailsCardHeaders, DetailsImageWrapper, DetailsInfo, DetailsInfoWrapper, StyledDetails } from "../../styles/Details/Details.styled";
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertiesService";
import { useUserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/dateFormatter";
import { Controlls } from "./Controlls";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Spinner } from "../Spinner/Spinner";
import { AddReviewBtn, ReviewCardWrapper, ReviewHeading, Reviews } from "../../styles/Details/Reviews.styled";
import { ReviewModal } from "./ReviewModal";
import { ReviewCard } from "./ReviewCard";
import { ErrorBox } from "../ErrorBox/ErrorBox";

export const Details = () => {

    const { properties, errors } = usePropertyContext();
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        propertyService.getById(id)
            .then(res => {
                setProperty(res);
                setIsLoading(false);
            }).catch(err => {
                alert(err);
                setIsLoading(false);
            });
    }, [id, properties]);

    const onShowModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    const isOwner = user._id === property._ownerId;
    const hasReviewed = property.reviews?.some(r => r._ownerId._id === user._id);
    const created = formatDate(property.createdAt, 'details');

    if (showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return (
        <StyledDetails>
            {errors ? <ErrorBox errors={errors} /> : null}
            {isLoading ? <Spinner /> :
                <>
                    <DetailsCard>
                        <DetailsImageWrapper>
                            <img src={property.imageUrl} alt={property.name} />
                        </DetailsImageWrapper>
                        <DetailsInfoWrapper>
                            <DetailsCardHeaders>
                                <h1>{property.name}</h1>
                                <h2>{property.location}</h2>
                                <h3>Rating: {property.rating
                                    ?
                                    <>
                                        {property.rating}
                                        <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}> ({property.reviews?.length})</span>
                                    </>
                                    : 'Not rated'} </h3>
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

                    {showModal && <ReviewModal
                        onCloseModal={onCloseModal}
                    />}

                    <Reviews>
                        <ReviewHeading>
                            <h1>Reviews</h1>
                            {user._id && !isOwner && !hasReviewed &&
                                <AddReviewBtn onClick={onShowModal}>Add Review</AddReviewBtn>
                            }
                        </ReviewHeading>

                        {property.reviews?.length > 0
                            ? <ReviewCardWrapper>
                                {property.reviews.map((r, i) => <ReviewCard review={r} key={i} />)}
                            </ReviewCardWrapper>
                            : <h2>
                                There aren't any reviews for this post yet
                            </h2>
                        }
                    </Reviews>
                </>
            }
        </StyledDetails >
    );

};