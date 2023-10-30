import { useEffect, useState } from "react";
import { HeaderWrapper, HomeWrapper, LatestWrapper, LinkWrapper, StyledLink } from "../../styles/Home/Home.styled";
import { propertyService } from "../../services/propertiesService";
import { HomeCard } from "./HomeCard";
import { useUserContext } from "../../contexts/UserContext";

export const Home = () => {
    const { user } = useUserContext();
    const [latestProperties, setLatestProperties] = useState([]);

    useEffect(() => {
        propertyService.getLatest()
            .then(result => {
                setLatestProperties(result);
            }).catch(err => {
                alert(err);
            });
    }, []);

    const propertiesCount = latestProperties.length;

    return (
        <HomeWrapper>
            <HeaderWrapper>
                <h1>Welcome {user._id ? user.email: 'to LuxLiving!'}</h1>
            </HeaderWrapper>
            <h2>Latest properties</h2>
            <LatestWrapper>
                {propertiesCount > 0
                    ? latestProperties.map(property => <HomeCard key={property._id} {...property} count={propertiesCount} />)
                    : <h2>No content yet</h2>
                }
            </LatestWrapper>
            <p>
                Join us in the pursuit of unparalleled luxury, where every day feels like an extraordinary indulgence.
                Welcome to a world where your desires are our top priority.
                Welcome to LuxeLiving, where luxury meets lifestyle in the most extraordinary way.</p>
            <LinkWrapper>
                <StyledLink to='/catalog'>Check the catalog</StyledLink>
                {user._id
                    ? <StyledLink to='/profile'>My properties</StyledLink>
                    : <StyledLink to='/register'>Register</StyledLink>
                }
            </LinkWrapper>
        </HomeWrapper>
    );
};