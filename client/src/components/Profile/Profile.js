import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { ProfileContainer, PropertiesWrapper } from "../../styles/Profile/Profile.styled";
import { propertyService } from "../../services/propertiesService";
import { ProfileCard } from "./ProfileCard";

export const Profile = () => {

    const { user } = useUserContext();
    const [ownBids, setOwnBids] = useState([]);
    const [ownProperties, setOwnProperties] = useState([]);

    const userId = user._id;

    useEffect(() => {
        propertyService.getOwn(userId)
            .then(res => {
                setOwnProperties(res.ownPosts);
                setOwnBids(res.ownBids);
            }).catch(err =>
                alert(err));
    }, [userId]);

    return (
        <ProfileContainer>
            <h1>{user.email}</h1>
            <h1>Your posts:</h1>
            <PropertiesWrapper>
                {ownProperties.length > 0
                    ? ownProperties.map(prop => <ProfileCard key={prop._id} {...prop} userId={userId} />)
                    : <h2>No content yet!</h2>}
            </PropertiesWrapper>
            <h1>Your bids:</h1>
            <PropertiesWrapper>
                {ownBids.length > 0
                    ? ownBids.map(prop => <ProfileCard key={prop._id} {...prop} userId={userId} />)
                    : <h2>No Bids yet!</h2>}
            </PropertiesWrapper>
        </ProfileContainer>
    );
};