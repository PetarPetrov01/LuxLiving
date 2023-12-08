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
});