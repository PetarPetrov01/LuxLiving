import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Rate } from "./Rate";

import { ErrorBox } from "../ErrorBox/ErrorBox";
import { Spinner } from "../Spinner/Spinner";
import {
    Modal, RatingContainer, ReviewForm, ReviewWrapper, StyledTextArea,
    SubmitReviewBtn, CloseModalButton, ReviewContainer, ReviewControls, DeleteReviewBtn
} from "../../styles/Details/ReviewModal.styled";

const rateScale = [
    'Poor',
    'Fair',
    'Good',
    'Great',
    'Excellent'
];

export const ReviewModal = ({
    onCloseModal,
    ownReview
}) => {
    const { onCreateReview, onDeleteReview, isLoading } = usePropertyContext();
    const { user: { _id: userId } } = useUserContext();

    const [rating, setRating] = useState(ownReview?.rating || null);
    const [hoverRating, setHoverRating] = useState(null);
    const [review, setReview] = useState(ownReview?.content || '');
    const [error, setError] = useState(null);

    const { id } = useParams();

    const onRatingHandler = useCallback((rate) => setRating(rate), []);
    const onRatingHover = useCallback((rate) => setHoverRating(rate), []);

    const onCloseClick = (e) => {
        e.preventDefault();
        onCloseModal();
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        try {
            if (!rating || !review) {
                throw new Error('You must provide rating and review content!');
            }
            if (review.length < 20 || review.length > 200) {
                throw new Error('The review content must be between 20 and 200 characters long')
            }

            if (ownReview) {
                //Handle edit Review
                console.log('editing review')
            } else {
                onCreateReview(id, { rating, content: review, userId });
            }

            onCloseModal();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteReview = (e) => {
        e.preventDefault();

        try {
            onDeleteReview(id, ownReview._id)
            onCloseModal()
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <Modal>
            {error ? <ErrorBox errors={error} /> : null}
            <ReviewWrapper>
                <ReviewForm onSubmit={handleReviewSubmit}>

                    <CloseModalButton onClick={onCloseClick}>
                        &#x2715;
                    </CloseModalButton>

                    <h1>{ownReview ? 'Edit review' : 'Add a review'}</h1>
                    <RatingContainer>
                        <h3>Rating:</h3>
                        <Rate
                            rating={rating}
                            setRating={onRatingHandler}
                            hoverRating={hoverRating}
                            setHoverRating={onRatingHover}
                        />
                        <span>{rateScale[hoverRating - 1] || rateScale[rating - 1] || 'Select rating'}</span>
                    </RatingContainer>

                    <ReviewContainer>
                        <h3>Review:</h3>
                        <StyledTextArea
                            placeholder="Write your opinion on the property
                • What you liked/disliked about it?
                • What would you like to know before buying it?
                • Would you recommend it?"
                            onChange={(e) => setReview(e.target.value)}
                            value={review}
                        >

                        </StyledTextArea>
                    </ReviewContainer>

                    {isLoading ? <Spinner></Spinner> :
                        <ReviewControls>
                            <SubmitReviewBtn>
                                {ownReview
                                    ? 'Update Review'
                                    : 'Submit your Review'
                                }
                            </SubmitReviewBtn>
                            {ownReview &&
                                <DeleteReviewBtn onClick={handleDeleteReview}>
                                    Delete review
                                </DeleteReviewBtn>
                            }

                        </ReviewControls>
                    }
                </ReviewForm>
            </ReviewWrapper>
        </Modal>
    );
};