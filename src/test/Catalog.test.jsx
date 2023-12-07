describe('Catalog page', () => {

    it('Search, Sort and Pagination are visible', async () => {
        render(<BrowserRouter>
            <ThemeProvider theme={theme}>
                <PropertyContext.Provider value={mockCatalogContext}>
                    <Catalog />
                </PropertyContext.Provider>
            </ThemeProvider>
        </BrowserRouter>);

        const searchInput = await screen.findByPlaceholderText('Name or location');
        const selectElements = await screen.findAllByRole('combobox');
        expect(searchInput).toBeVisible();

        selectElements.forEach(el => expect(el).toBeVisible());
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
    });
