import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { ProfileContainer, PropertiesWrapper } from "../../styles/Profile/Profile.styled";
import { propertyService } from "../../services/propertiesService";
import { ProfileCard } from "./ProfileCard";

export const Profile = () => {

    const { user } = useUserContext();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        propertyService.getOwn(user._id)
            .then(res => {
                setProperties(res);
            }).catch(err =>
                alert(err));
    }, [user]);

    return (
        <ProfileContainer>
            <h1>{user.email}</h1>
            <PropertiesWrapper>
                <h2>Your posts:</h2>
                {properties.length > 0
                    ? properties.map(prop => <ProfileCard key={prop._id} {...prop} />)
                    : <h2>No content yet!</h2>}
            </PropertiesWrapper>
        </ProfileContainer>
    );
};