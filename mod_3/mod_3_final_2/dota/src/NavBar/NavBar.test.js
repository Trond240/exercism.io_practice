import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavBar } from '././NavBar.js'
import  { BrowserRouter }  from 'react-router-dom';

describe('NavBar', () => {
    it('should Render Listings to the page', () => {

            const { getByText } = render(
                <BrowserRouter>
                    <NavBar  
                        favorites={[]}
                    />
                </BrowserRouter>
        )

        const welcomeEl = getByText('LEAGUE-IT!')
        expect(welcomeEl).toBeInTheDocument(); 

        const favoritesCountEl = getByText('0 No Favorites')
        expect(favoritesCountEl).toBeInTheDocument(); 

        const championBtn = getByText('Champions')
        expect(championBtn).toBeInTheDocument(); 

        const homeBtn = getByText('Home Page')
        expect(homeBtn).toBeInTheDocument(); 
    });

    it('Should show when favorites are added to the list', () => {

        const { getByText } = render(
            <BrowserRouter>
                <NavBar  
                    favorites={[1, 2]}
                />
            </BrowserRouter>
    )

    const welcomeEl = getByText('LEAGUE-IT!')
    expect(welcomeEl).toBeInTheDocument(); 

    const favoritesCountEl = getByText('2 Favorites')
    expect(favoritesCountEl).toBeInTheDocument(); 

    const championBtn = getByText('Champions')
    expect(championBtn).toBeInTheDocument(); 

    const homeBtn = getByText('Home Page')
    expect(homeBtn).toBeInTheDocument(); 
});
});