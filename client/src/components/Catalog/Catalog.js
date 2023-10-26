import { StyledCatalog } from "../../styles/Catalog/Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Catalog = () => {

    const { properties } = usePropertyContext();

    return (
        <StyledCatalog >
            {properties.length > 0
                ? properties.map((p, index) => <CatalogCard key={p._id} {...p} flexdir={index % 2 !== 0 ? 'row-reverse' : 'row'} />)
                : <h1>No Content yet</h1>}
        </StyledCatalog>
    );
};