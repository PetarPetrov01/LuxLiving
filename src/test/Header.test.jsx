
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

