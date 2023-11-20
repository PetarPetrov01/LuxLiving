import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { ProfileContainer, ProfileSelectWrapper, PropertiesWrapper } from "../../styles/Profile/Profile.styled";
import { propertyService } from "../../services/propertiesService";
import { ProfileCard } from "./ProfileCard";
import { ReviewCard } from "./ReviewCard";
import { ReviewWrapper } from "../../styles/Profile/OwnReviewCard.styled";

export const Profile = () => {

    const { user } = useUserContext();
    const [ownBids, setOwnBids] = useState([]);
    const [ownProperties, setOwnProperties] = useState([]);
    const [ownReviews, setOwnReviews] = useState([]);
    const [selection, setSelection] = useState('posts');

    const userId = user._id;

    useEffect(() => {
        propertyService.getOwn(userId)
            .then(res => {
                setOwnProperties(res.ownPosts);
                setOwnBids(res.ownBids);
                setOwnReviews(res.ownReviews);
            }).catch(err =>
                alert(err));
    }, [userId]);

    const selectChange = (e) => {
        setSelection(e.target.value);
    };

    return (
        <ProfileContainer>
            <h1>{user.email}</h1>
            <ProfileSelectWrapper>
                <h2>Your own:</h2>
                <select
                    onChange={selectChange}
                    value={selection}>

                    <option value={'posts'}>Posts</option>
                    <option value={'bids'}>Placed Bids</option>
                    <option value={'reviews'}>Reviews</option>
                </select>
            </ProfileSelectWrapper>
            {selection === 'posts'
                ? <PropertiesWrapper>
                    {ownProperties.length > 0
                        ? ownProperties.map(prop => <ProfileCard key={prop._id} {...prop} userId={userId} />)
                        : <h2>No posts yet!</h2>}
                </PropertiesWrapper>
                : null
            }
            {selection === 'bids' ?
                <PropertiesWrapper>
                    {ownBids.length > 0
                        ? ownBids.map(prop => <ProfileCard key={prop._id} {...prop} userId={userId} />)
                        : <h2>No Bids yet!</h2>}
                </PropertiesWrapper>
                : null
            }
            <ReviewWrapper>

                {selection === 'reviews' ?
                    ownReviews.length > 0
                        ? ownReviews.map(rev => <ReviewCard key={rev._id} {...rev} email={user.email} />)
                        : <h2>No reviews yet!</h2>
                    : null}
            </ReviewWrapper>
        </ProfileContainer>
    );
};