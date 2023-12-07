import {  render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import App from '../App';
import { Header } from '../components/Header/Header';
import { theme } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

describe('Header', () => {
    window.alert = vi.fn();

    it('Header is visualized', () => {
        render(<BrowserRouter basename='/'>
            <App />
        </BrowserRouter>);
        const headerElement = screen.getByRole('banner');

        expect(headerElement).toBeVisible();
    });

    it('Logo and navigation are visualized', () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>);

        const logo = screen.getByAltText('Logo');
        const catalogLink = screen.getByRole('link', { name: 'Catalog' });

        expect(logo).toBeVisible();
        expect(catalogLink).toBeVisible();
    });

    it('Logo redirects to the home', async () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>);

        const logo = screen.getByAltText('Logo');
        userEvent.click(logo);

        await waitFor(() => {
            const heading = screen.getByText('Latest properties');
            expect(heading).toBeVisible();
        });
    });

    it('Catalog redirects to the catalog page', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const catalogLink = screen.getByRole('link', { name: 'Catalog' });
        await userEvent.click(catalogLink);

        const searchInput = await screen.findByPlaceholderText('Name or location');
        const selectElements = await screen.findAllByRole('combobox');
        expect(searchInput).toBeVisible();

        selectElements.forEach(el => expect(el).toBeVisible());
    });

    it('Login redirects to the login page', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const loginLink = screen.getByRole('link', { name: 'Login' });
        await userEvent.click(loginLink);

        ['Email', 'Password']
            .map((el) => screen.getByPlaceholderText(el))
            .forEach(el => expect(el).toBeVisible());
    });

    it('Register redirects to the register page', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const loginLink = screen.getByRole('link', { name: 'Register' });
        await userEvent.click(loginLink);

        ['Email', 'Password', 'Repeat password']
            .map((el) => screen.getByPlaceholderText(el))
            .forEach(el => expect(el).toBeVisible());
    });

    describe('Logged user', () => {

        it('Logged in user links', async () => {
            const mockContext = {
                user: {
                    _id: '111111'
                }
            };

            render(<BrowserRouter>
                <ThemeProvider theme={theme}>
                    <UserContext.Provider value={mockContext}>
                        <Header />
                    </UserContext.Provider>
                </ThemeProvider>
            </BrowserRouter >);

            const links = ['Catalog', 'Profile', 'Create', 'Logout'];

            links.map(a => screen.getByRole('link', { name: a }))
                .forEach(el => expect(el).toBeVisible());
        });
    });
});
