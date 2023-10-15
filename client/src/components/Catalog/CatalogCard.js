import { StyledCard } from "./Catalog.styled";

export const CatalogCard = ({
    flexdir
}) => {
    return (
        <StyledCard flexdir={flexdir}>
            <div>
                <img
                    src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
                    alt="White house" />
            </div>
            <div>
                <h3> White House</h3>
                <p> Nice house situated somewhere</p>
                <span>Price:</span> 200
            </div>
        </StyledCard>
    );
};