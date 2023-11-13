import { useLocation } from "react-router-dom";
import { ImageWrapper404, Link404, NotFoundCard, Styled404, TextWrapper } from "../../styles/NotFound/NotFound.styled";

export const NotFound = () => {
    const { pathname } = useLocation();

    const isProeprtyId = /\/catalog\/[a-zA-Z0-9]+$/.test(pathname);
    let path = pathname.length > 15
        ? `${pathname.slice(0, 15)}...`
        : pathname;

    return (
        <Styled404>
            <NotFoundCard>

                <ImageWrapper404>
                    <img src="/images/404.png" alt="Not found" />

                </ImageWrapper404>
                <TextWrapper>
                    {isProeprtyId
                        ?
                        <>
                            <p>The requested property does not exist!</p>
                            <Link404 to={'/catalog'}>- Catalog -</Link404>
                        </>
                        :
                        <>
                            <p>The requested URL <b>{path}</b> was not found.</p>
                            <Link404 to={'/'}>- Home -</Link404>
                        </>
                    }
                </TextWrapper>
            </NotFoundCard>
        </Styled404 >
    );
};