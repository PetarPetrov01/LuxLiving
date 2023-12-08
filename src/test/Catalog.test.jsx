import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";
import { Catalog } from "../components/Catalog/Catalog";
import { PropertyContext } from "../contexts/PropertyContext";

import { mockCatalogContext } from './mockData';
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/GlobalStyles";
import { expect } from "chai";


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

    it('Three real estate properties are visible', async () => {
        render(<BrowserRouter>
            <ThemeProvider theme={theme}>
                <PropertyContext.Provider value={mockCatalogContext}>
                    <Catalog />
                </PropertyContext.Provider>
            </ThemeProvider>
        </BrowserRouter>);

        const properties = screen.getAllByText(/house.+/);
        expect(properties.length).toEqual(3);

        properties.forEach(p => expect(p).toBeVisible());
    });

