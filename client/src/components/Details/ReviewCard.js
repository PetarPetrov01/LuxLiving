import { FaStar } from "react-icons/fa";
import { ReviewCreatorInfo, ReviewStyledCard } from "../../styles/Details/Reviews.styled";
import { formatDate } from "../../utils/dateFormatter";

const rateScale = [
    'Poor',
    'Fair',
    'Good',
    'Great',
    'Excellent'
];

export const ReviewCard = ({ review }) => {

    const starColor = (index) => {
        if (review.rating >= index) {
            return 'rgb(255, 215, 0)';
        }

        return 'rgb(150,150,150)';
    };

    return (
        <ReviewStyledCard>
            <ReviewCreatorInfo>
                <h4>{review._ownerId?.email}</h4>
                <span style={{ fontSize: '0.8em', padding: '2px 2px' }}>{formatDate(review.createdAt)}</span>
            </ReviewCreatorInfo>
            <h3>{rateScale[review.rating - 1]}</h3>
            <div>
                {[...Array(5)]
                    .map((_, i) => i + 1)
                    .map((index) => {
                        return (<FaStar
                            key={index}
                            size={20}
                            style={{ color: starColor(index) }}
                        />);
                    })
                }
            </div>
            <p>{review.content}</p>
        </ReviewStyledCard>
    );
};