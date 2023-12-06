
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vitest } from 'vitest';
import App from '../App';

describe('Header', () => {
    window.alert = vitest.fn();

    it('Header is visualized', () => {
        render(<BrowserRouter basename='/'>
            <App />
        </BrowserRouter>);
        const headerElement = screen.getByRole('banner');

        expect(headerElement).toBeVisible();
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
});
