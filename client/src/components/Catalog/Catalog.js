import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ControlsWrapper, SearchForm, StyledCatalog, StyledSelect, SortWrapper } from "../../styles/Catalog/Catalog.styled";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { useDelayedSearch } from "../../hooks/useDelayedSearch";
import { CatalogCard } from "./CatalogCard";
import { Spinner } from "../Spinner/Spinner";

export const Catalog = () => {

    const { properties, onParamsChange, isLoading } = usePropertyContext();

    const [queryParams, setQueryParams] = useSearchParams({
        search: '',
        sort: 'createdAt desc'
    }, { replace: true });

    const search = queryParams.get('search');
    const sort = queryParams.get('sort');
    const delaydSearch = useDelayedSearch(search);

    useEffect(() => {
        onParamsChange(delaydSearch, sort);
    }, [delaydSearch, sort, onParamsChange]);

    const onChangeHandler = (e) => {
        setQueryParams(prevQ => {
            prevQ.set('search', e.target.value);
            return prevQ;
        });
    };

    const selectChange = (e) => {
        setQueryParams(prevQ => {
            prevQ.set('sort', e.target.value);
            return prevQ;
        });
    };

    return (
        <StyledCatalog >
            <ControlsWrapper>
                <SearchForm>
                    <input name="search" placeholder="Name or location"
                        onChange={onChangeHandler}
                        value={search} />
                </SearchForm>


                <SortWrapper>
                    <label htmlFor="sortOrder">Sort by:</label>
                    <StyledSelect
                        onChange={selectChange}
                        value={sort}
                        name="sortOrder">
                        <option value={'createdAt desc'}>Newest</option>
                        <option value={'createdAt asc'}>Oldest</option>
                        <option value={'name asc'}>Name A-Z</option>
                        <option value={'name desc'}>Name Z-A</option>
                        <option value={'price asc'}>Price asc.</option>
                        <option value={'price desc'}>Price desc.</option>
                        <option value={'area asc'}>Area asc.</option>
                        <option value={'area desc'}>Area desc.</option>
                    </StyledSelect>
                </SortWrapper>
            </ControlsWrapper>

                properties.length > 0
                    ? properties.map((p, index) => <CatalogCard key={p._id} {...p} flexdir={index % 2 !== 0 ? 'row-reverse' : 'row'} />)
                    : search !== ''
                        ? <h1>No matches</h1>
                        : <h1>No Content yet</h1>
            }
        </StyledCatalog >
    );
};