import { ImageWrapper404, Link404, NotFoundCard, Styled404, TextWrapper } from "../../styles/NotFound/NotFound.styled";

export const NotFound = () => {
    const { pathname } = useLocation();


    return (
        <Styled404>
            <NotFoundCard>

                <ImageWrapper404>
                    <img src="/images/404.png" alt="Not found" />

                </ImageWrapper404>
                <TextWrapper>
                            <p>The requested URL <b>{path}</b> was not found.</p>
                            <Link404 to={'/'}>- Home -</Link404>
                        </>
                </TextWrapper>
            </NotFoundCard>
        </Styled404 >
    );
};