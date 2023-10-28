import { StyledCatalog } from "../../styles/Catalog/Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Catalog = () => {

    const { properties } = usePropertyContext();
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
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

    return (
        <StyledCatalog >
            {properties.length > 0
                ? properties.map((p, index) => <CatalogCard key={p._id} {...p} flexdir={index % 2 !== 0 ? 'row-reverse' : 'row'} />)
                : <h1>No Content yet</h1>}
        </StyledCatalog>
            <ControlsWrapper>
                <SearchForm>
                    <input name="search" placeholder="Search"
                        onChange={onChangeHandler}
                        value={search} />

                    <input onClick={handleSearch} type="image" src="images/search.svg" alt="Search" />
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