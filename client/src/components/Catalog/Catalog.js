import { StyledCatalog } from "../../styles/Catalog/Catalog.styled";
import { CatalogCard } from "./CatalogCard";

export const Catalog = () => {

    return (
        <StyledCatalog >
            <CatalogCard />
            <CatalogCard flexdir={'row-reverse'} />
            <CatalogCard />
        </StyledCatalog>
    );
};