import { useEffect, useState } from "react";
import { HeaderWrapper, HomeWrapper, LatestWrapper, LinkWrapper, StyledLink } from "../../styles/Home/Home.styled";
import { propertyService } from "../../services/propertiesService";
import { HomeCard } from "./HomeCard";
import { useUserContext } from "../../contexts/UserContext";
import { Spinner } from "../Spinner/Spinner";
import { mockDelay } from "../../utils/mockDelay";

export const Home = () => {
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [latestProperties, setLatestProperties] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        propertyService.getLatest()
            .then(result => {
                //Mock delay
                mockDelay(1000,
                    () => setLatestProperties(result),
                    () => setIsLoading(false)
                );
            }).catch(err => {
                alert(err);
                setIsLoading(false);
            });
    }, []);

    const propertiesCount = latestProperties.length;

    return (
        <HomeWrapper>
            <HeaderWrapper>
                <h1>Welcome {user._id ? user.email : 'to LuxLiving!'}</h1>
            </HeaderWrapper>
            <h2>Latest properties</h2>
            {isLoading ? <Spinner />
                : <LatestWrapper>
                    {propertiesCount > 0
                        ? latestProperties.map(property => <HomeCard key={property._id} {...property} count={propertiesCount} />)
                        : <h2>No content yet</h2>}
                </LatestWrapper>
            }
            <p>
                Join us in the pursuit of unparalleled luxury, where every day feels like an extraordinary indulgence.
                Welcome to a world where your desires are our top priority.
                Welcome to LuxLiving, where luxury meets lifestyle in the most extraordinary way.</p>
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