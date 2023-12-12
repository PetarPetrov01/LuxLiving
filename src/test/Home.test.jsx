import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { Home } from "../components/Home/Home";
import App from "../App";
// import userEvent from "@testing-library/user-event";

describe('Home page', () => {
    it('Home is rendered', () => {

        render(<BrowserRouter>
            <App>
                <Home>
                </Home>
            </App>
        </BrowserRouter>);

        const headings = screen.getAllByRole('heading');

        headings.forEach(el => expect(el).toBeVisible());
        expect(headings.length).toEqual(2);
    });

    it('Catalog and register link', () => {
        render(<BrowserRouter>
            <App>
                <Home>
                </Home>
            </App>
        </BrowserRouter>);

        const main = screen.getByRole('main');
        const links = within(main).getAllByRole('link');

        expect(links.length).toEqual(2);
        links.forEach(a => expect(a).toBeVisible());
    });

    it('Catalog link works', async () => {
        render(<BrowserRouter>
            <App>
                <Home>
                </Home>
            </App>
        </BrowserRouter>);

        const main = screen.getByRole('main');
        const catalogLink = within(main).getByRole('link', { name: 'Check the catalog' });

        // Catalog gets unexpectedly rendered in the next test too???
        
        // userEvent.click(catalogLink);

        // await waitFor(() => {
        //     const searchInput = screen.getByPlaceholderText('Name or location');
        //     const selectElements = screen.getAllByRole('combobox');
        //     expect(searchInput).toBeVisible();

        //     selectElements.forEach(el => expect(el).toBeVisible());
        // });

        const catalogPath = new URL(catalogLink.href);

        expect(catalogPath.pathname).toEqual('/catalog');
    });

    it('Register link works', async () => {
        render(
            <BrowserRouter>
                <App>
                    <Home />
                </App>
            </BrowserRouter>
        );

        const main = screen.getByRole('main');
        const registerLink = within(main).getByRole('link', { name: 'Register' });


        // Catalog gets unexpectedly rendered in this test???
        
        // userEvent.click(registerLink);
        
        // await waitFor(() => {
            //     ['Email', 'Password', 'Repeat password']
            //         .map((el) => screen.getByPlaceholderText(el))
            //         .forEach(el => expect(el).toBeVisible());
            // });
        
        const registerPath = new URL(registerLink.href);
        expect(registerPath.pathname).toEqual('/register');
    });

});