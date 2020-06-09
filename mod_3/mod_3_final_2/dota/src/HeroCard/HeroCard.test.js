import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroCard } from '././HeroCard.js'
import { BrowserRouter } from 'react-router-dom';

const mockFavoriting = jest.fn()
const mockRemoveFavoriting = jest.fn()

describe('NavBar', () => {
    it('should render champions to the page', () => {

            const { getByText } = render(
                <BrowserRouter>
                    <HeroCard 
                        id={1}
                        name={'AxMan'}
                        fullImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                        spriteImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                        group={'demon'}
                        attack={3}
                        defense={23}
                        difficulty={2}
                        magic={1}
                        partype={'angel'}
                        tags={['mage', 'warrior']}
                        title={'I weild it'}
                        addToFavorites={mockFavoriting}
                        removeFromFavorites={mockRemoveFavoriting}
                        favorites={[]}
                    />
                </BrowserRouter>
        )

        const nameEl = getByText('AxMan')
        expect(nameEl).toBeInTheDocument();
        
        const viewMoreEl = getByText('View More')
        expect(viewMoreEl).toBeInTheDocument();
        
        const favoriteEl = getByText('Favorite')
        expect(favoriteEl).toBeInTheDocument();

        const championImageAlt = screen.getByAltText("AxMan-image")
        expect(championImageAlt).toBeInTheDocument(); 

        const favoriteAlt = screen.getByAltText("favorite-image")
        expect(favoriteAlt).toBeInTheDocument(); 

        const viewMoreAlt = screen.getByAltText("wiew-more-image")
        expect(viewMoreAlt).toBeInTheDocument(); 


    });

    it('should fire the addToFavorites method', () => {

        const { getByText } = render(
            <BrowserRouter>
                <HeroCard 
                    id={1}
                    name={'AxMan'}
                    fullImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                    spriteImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                    group={'demon'}
                    attack={3}
                    defense={23}
                    difficulty={2}
                    magic={1}
                    partype={'angel'}
                    tags={['mage', 'warrior']}
                    title={'I weild it'}
                    addToFavorites={mockFavoriting}
                    removeFromFavorites={mockRemoveFavoriting}
                    favorites={[]}
                />
            </BrowserRouter>
    )

    const nameEl = getByText('AxMan')
    expect(nameEl).toBeInTheDocument();
    
    const viewMoreEl = getByText('View More')
    expect(viewMoreEl).toBeInTheDocument();
    
    const favoriteEl = getByText('Favorite')
    expect(favoriteEl).toBeInTheDocument();

    fireEvent.click(getByText("Favorite"))
    expect(mockFavoriting).toHaveBeenCalledWith(1);
});

it('should fire the removeFromFavorites method', () => {

    const { getByText } = render(
        <BrowserRouter>
            <HeroCard 
                id={1}
                name={'AxMan'}
                fullImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                spriteImage={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/AxMan'}
                group={'demon'}
                attack={3}
                defense={23}
                difficulty={2}
                magic={1}
                partype={'angel'}
                tags={['mage', 'warrior']}
                title={'I weild it'}
                addToFavorites={mockFavoriting}
                removeFromFavorites={mockRemoveFavoriting}
                favorites={[1]}
            />
        </BrowserRouter>
)

const nameEl = getByText('AxMan')
expect(nameEl).toBeInTheDocument();

const viewMoreEl = getByText('View More')
expect(viewMoreEl).toBeInTheDocument();

const favoriteEl = getByText('Un-favorite')
expect(favoriteEl).toBeInTheDocument();

const favoriteAlt = screen.getByAltText("un-favorite-image")
expect(favoriteAlt).toBeInTheDocument(); 

fireEvent.click(getByText("Un-favorite"))
expect(mockRemoveFavoriting).toHaveBeenCalledWith(1);
});
});