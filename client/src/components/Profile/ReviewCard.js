import { FaStar } from "react-icons/fa";
import { OwnReviewCreatorInfo, OwnReviewPropertyInfo, PostLink, ReviewImageWrapper, ReviewLinkWrapper, ReviewStyledCard } from "../../styles/Profile/OwnReviewCard.styled";
import { formatDate } from "../../utils/dateFormatter";

const rateScale = [
    'Poor',
    'Fair',
    'Good',
    'Great',
    'Excellent'
];

export const ReviewCard = ({
    content,
    rating,
    createdAt,
    _propertyId: { name, location, _id: propId, imageUrl },
    email

}) => {

    const starColor = (index) => {
        if (rating >= index) {
            return 'rgb(255, 215, 0)';
        }

        return 'rgb(150,150,150)';
    };

    return (
        <ReviewStyledCard>
            <OwnReviewPropertyInfo>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <ReviewImageWrapper>
                    <img src={imageUrl} alt="name"></img>
                    <ReviewLinkWrapper>
                        <PostLink to={`/catalog/${propId}/details`}>Go to post</PostLink>
                    </ReviewLinkWrapper>
                </ReviewImageWrapper>
            </OwnReviewPropertyInfo>
            <OwnReviewCreatorInfo>
                <span style={{ fontSize: '0.8em', padding: '2px 2px' }}>{formatDate(createdAt)}</span>
                <h3>{rateScale[rating - 1]}</h3>
                <div>
                    {[...Array(5)]
                        .map((_, i) => i + 1)
                        .map((index) => {
                            return (<FaStar
                                key={index}
                                size={25}
                                style={{ color: starColor(index) }}
                            />);
                        })
                    }
                </div>
                <p>{content}</p>
            </OwnReviewCreatorInfo>

        </ReviewStyledCard>
    );
};