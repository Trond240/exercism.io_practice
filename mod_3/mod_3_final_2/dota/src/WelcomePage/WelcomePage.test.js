import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WelcomePage } from '././WelcomePage.js'
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
    it('should Render Listings to the page', () => {

            const { getByText, getByAltText } = render(
                <BrowserRouter>
                    <WelcomePage />
                </BrowserRouter>
        )

        const welcomeEl = getByText('Welcome! Please Click to Enter')
        expect(welcomeEl).toBeInTheDocument(); 

        const imageAlt = screen.getByAltText("welcome-photo")
        expect(imageAlt).toBeInTheDocument(); 
    });
});