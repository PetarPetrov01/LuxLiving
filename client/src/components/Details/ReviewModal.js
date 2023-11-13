import { Modal, RatingContainer, ReviewForm, ReviewWrapper, StyledTextArea, SubmitReviewBtn, CloseModalButton } from "../../styles/Details/ReviewModal.styled";

export const ReviewModal = ({
    onCloseModal
}) => {
    return (
        <Modal>
            <ReviewWrapper>
                <ReviewForm>
                </ReviewForm>
            </ReviewWrapper>
        </Modal>
    );
};