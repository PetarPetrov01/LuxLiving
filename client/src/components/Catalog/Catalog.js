import { StyledCatalog } from "../../styles/Catalog/Catalog.styled";
import { ControlsWrapper, SearchForm, StyledCatalog, StyledSelect, SortWrapper } from "../../styles/Catalog/Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { useEffect, useState } from "react";

export const Catalog = () => {

    const { properties } = usePropertyContext();
    const [sort, setSort] = useState({ type: 'Name', order: 'asc' });
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const { onSearch, properties, onSort } = usePropertyContext();

    useEffect(() => {
        if (!hasSearched) {
            onSearch('');
        }
    }, [hasSearched, onSearch]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setHasSearched(search !== '');
        onSearch(search);
    };

    const selectChange = (e) => {
        const [type, order] = e.target.value.split(' ');
        setSort(state => ({ ...state, type: type, order: order }));
        onSort({ type, order });
    };

    return (
        <StyledCatalog >
                ? properties.map((p, index) => <CatalogCard key={p._id} {...p} flexdir={index % 2 !== 0 ? 'row-reverse' : 'row'} />)
                : <h1>No Content yet</h1>}
        </StyledCatalog>
            <ControlsWrapper>
                <SearchForm>
                    <input name="search" placeholder="Search"
                        onChange={onChangeHandler}
                        value={search} />

                    <input onClick={handleSearch} type="image" src="images/search.svg" alt="Search" />
                </SearchForm>
                <SortWrapper>
                    <label htmlFor="sortOrder">Sort by:</label>
                    <StyledSelect
                        onChange={selectChange}
                        value={sort.value}
                        name="sortOrder"
                    >
                        <option value={'name'}>Name</option>
                        <option value={'_createdOn desc'}>Newest</option>
                        <option value={'_createdOn asc'}>Oldest</option>
                        <option value={'price asc'}>Price asc.</option>
                        <option value={'price desc'}>Price desc.</option>
                        <option value={'area asc'}>Area asc.</option>
                        <option value={'area desc'}>Area desc.</option>
                    </StyledSelect>
                </SortWrapper>
            </ControlsWrapper>

            {
                properties.length > 0
                    ? properties.map((p, index) => <CatalogCard key={p._id} {...p} flexdir={index % 2 !== 0 ? 'row-reverse' : 'row'} />)
                    : hasSearched
                        ? <h1>No matches</h1>
                        : <h1>No Content yet</h1>

            }
        </StyledCatalog >
    );
};