import { Modal, RatingContainer, ReviewForm, ReviewWrapper, StyledTextArea, SubmitReviewBtn, CloseModalButton } from "../../styles/Details/ReviewModal.styled";

export const ReviewModal = ({
    onCloseModal
}) => {
    onCloseModal,
    }) => {
    const { onCreateReview } = usePropertyContext();
    const { user: { _id: userId } } = useUserContext();

    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const [review, setReview] = useState('');

    const { id } = useParams();

    const onRatingHandler = useCallback((rate) => setRating(rate), []);
    const onRatingHover = useCallback((rate) => setHoverRating(rate), []);

    const onCloseClick = (e) => {
        e.preventDefault();
        onCloseModal();
    };
    return (
        <Modal>
            <ReviewWrapper>
                <ReviewForm>
                        <h3>Review:</h3>

                    <SubmitReviewBtn>
                        Submit your Review
                    </SubmitReviewBtn>
                </ReviewForm>
            </ReviewWrapper>
        </Modal>
    );
};