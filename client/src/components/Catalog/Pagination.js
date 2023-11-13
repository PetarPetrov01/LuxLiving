import { LimitContainer, LimitSelection, PageButton, PagesWrapper, PaginationContainer, Spacer } from "../../styles/Catalog/Pagination.styled";

export const Pagination = ({
    pages,
    page,
    limitChange,
    pageChange,
    limit
}) => {

    const clickHandler = (e) => {
        if (e.target.tagName === 'DIV') {
            return;
        }
        pageChange(e.target.name);
    };

    return (
        <PaginationContainer>
            <LimitContainer>
                <label>
                    Items per page:
                </label>
                <LimitSelection
                    name="limit"
                    onChange={limitChange}
                    value={limit || 3}>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </LimitSelection>
            </LimitContainer>
            <PagesWrapper onClick={clickHandler}>
                <PageButton disabled={!pages.previous} name="prevBtn">&#11164; Previous</PageButton>
                {page} of {pages.pageCount}
                <PageButton disabled={!pages.next} name="nextBtn">Next &#11166;</PageButton>
            </PagesWrapper>
            <Spacer />
        </PaginationContainer>

    );
};