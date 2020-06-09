import React from 'react';
import { render, waitForElement, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { fetchInfo } from './apiCalls.js';

jest.mock('/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/apiCalls.js')

const mockData = {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "10.9.1",
    "data": {
    "Aatrox": {
    "version": "10.9.1",
    "id": "Aatrox",
    "key": "266",
    "name": "Aatrox",
    "title": "the Darkin Blade",
    "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
    "info": {
    "attack": 8,
    "defense": 4,
    "magic": 3,
    "difficulty": 4
    },
    "image": {
    "full": "Aatrox.png",
    "sprite": "champion0.png",
    "group": "champion",
    "x": 0,
    "y": 0,
    "w": 48,
    "h": 48
    },
    "tags": [
    "Fighter",
    "Tank"
    ],
    "partype": "Blood Well",
    "stats": {
    "hp": 580,
    "hpperlevel": 90,
    "mp": 0,
    "mpperlevel": 0,
    "movespeed": 345,
    "armor": 38,
    "armorperlevel": 3.25,
    "spellblock": 32.1,
    "spellblockperlevel": 1.25,
    "attackrange": 175,
    "hpregen": 3,
    "hpregenperlevel": 1,
    "mpregen": 0,
    "mpregenperlevel": 0,
    "crit": 0,
    "critperlevel": 0,
    "attackdamage": 60,
    "attackdamageperlevel": 5,
    "attackspeedperlevel": 2.5,
    "attackspeed": 0.651}
    }
  }
}


const renderApp = () => {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )
}

describe('App', ()  => {
  fetchInfo.mockResolvedValue(mockData); 

  it('Should have a welcome page on load', async () => {

    const { getByText, getByAltText } = renderApp()

    const navBarHeader = getByText('LEAGUE-IT!')
    expect(navBarHeader).toBeInTheDocument();

    const favorites = getByText('0 No Favorites')
    expect(favorites).toBeInTheDocument();

    const championBtn = getByText('Champions')
    expect(championBtn).toBeInTheDocument();

    const homeBtn = getByText('Home Page')
    expect(homeBtn).toBeInTheDocument();

    const imageAlt = await waitForElement( () => screen.getByAltText("welcome-photo")) 
    expect(imageAlt).toBeInTheDocument();

    const welcomeEl = await waitForElement( () => getByText("Welcome! Please Click to Enter")) 
    expect(welcomeEl).toBeInTheDocument();
});

it('Should show a list of heros when the home imafge is clicked', async () => {

  const { getByText, getAllByText, getByAltText } = renderApp();

    const imageAlt = await waitForElement( () => screen.getByAltText("welcome-photo")) 
    expect(imageAlt).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('welcome-photo')); 
  
    const nameOneEl = await waitForElement( () => getByText("Ahri")) 
    expect(nameOneEl).toBeInTheDocument();

    const nameTwoEl = await waitForElement( () => getByText("Akali")) 
    expect(nameTwoEl).toBeInTheDocument();

    const nameThreeEl = await waitForElement( () => getByText("Alistar")) 
    expect(nameThreeEl).toBeInTheDocument();
});

it('Should show hero info page when view more is clicked', async () => {

  const { getByText, getAllByText, getByAltText } = renderApp();

    const imageAlt = await waitForElement( () => screen.getByAltText("welcome-photo")) 
    expect(imageAlt).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('welcome-photo')); 
  
    const nameOneEl = await waitForElement( () => getByText("Ahri")) 
    expect(nameOneEl).toBeInTheDocument();

    const nameTwoEl = await waitForElement( () => getByText("Akali")) 
    expect(nameTwoEl).toBeInTheDocument();

    const nameThreeEl = await waitForElement( () => getByText("Alistar")) 
    expect(nameThreeEl).toBeInTheDocument();

    const viewMoreBtn = await waitForElement( () => getAllByText("View More")) 
    expect(viewMoreBtn[0]).toBeInTheDocument();
    
    const viewMoreButton = await waitForElement(() => getAllByText('View More'))
    fireEvent.click(viewMoreButton[0])

    const nicnkNamEl = await waitForElement( () => getByText("the Darkin Blade")) 
    expect(nicnkNamEl).toBeInTheDocument();

    const blurbEl = await waitForElement( () => getByText("Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...")) 
    expect(blurbEl).toBeInTheDocument();

    const infoCardNameEl = await waitForElement( () => getByText("Aatrox")) 
    expect(infoCardNameEl).toBeInTheDocument();
});

it('Should be able to favorite a hero', async () => {

  const { getByText, getAllByText, getByAltText } = renderApp();

    const imageAlt = await waitForElement( () => screen.getByAltText("welcome-photo")) 
    expect(imageAlt).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('welcome-photo')); 
  
    const nameOneEl = await waitForElement( () => getByText("Ahri")) 
    expect(nameOneEl).toBeInTheDocument();

    const nameTwoEl = await waitForElement( () => getByText("Akali")) 
    expect(nameTwoEl).toBeInTheDocument();

    const nameThreeEl = await waitForElement( () => getByText("Alistar")) 
    expect(nameThreeEl).toBeInTheDocument();

    const viewMoreBtn = await waitForElement( () => getAllByText("View More")) 
    expect(viewMoreBtn[0]).toBeInTheDocument();
    
    const viewMoreButton = await waitForElement(() => getAllByText('View More'))
    fireEvent.click(viewMoreButton[0])

    const nicnkNamEl = await waitForElement( () => getByText("the Darkin Blade")) 
    expect(nicnkNamEl).toBeInTheDocument();

    const blurbEl = await waitForElement( () => getByText("Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...")) 
    expect(blurbEl).toBeInTheDocument();

    const infoCardNameEl = await waitForElement( () => getByText("Aatrox")) 
    expect(infoCardNameEl).toBeInTheDocument();

    const favoriteButtonEl = await waitForElement( () => getByText("Favorite")) 
    expect(favoriteButtonEl).toBeInTheDocument();

    const favoriteButton = await waitForElement(() => getByText('Favorite'))
    fireEvent.click(favoriteButton)

    const favoriteCountEl = await waitForElement( () => getByText("1 Favorites")) 
    expect(favoriteCountEl).toBeInTheDocument();
});

it('Should be able to view favorite heros', async () => {

  const { getByText, getAllByText, getByAltText } = renderApp();

    const imageAlt = await waitForElement( () => screen.getByAltText("welcome-photo")) 
    expect(imageAlt).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('welcome-photo')); 
  
    const nameOneEl = await waitForElement( () => getByText("Ahri")) 
    expect(nameOneEl).toBeInTheDocument();

    const nameTwoEl = await waitForElement( () => getByText("Akali")) 
    expect(nameTwoEl).toBeInTheDocument();

    const nameThreeEl = await waitForElement( () => getByText("Alistar")) 
    expect(nameThreeEl).toBeInTheDocument();

    const viewMoreBtn = await waitForElement( () => getAllByText("View More")) 
    expect(viewMoreBtn[0]).toBeInTheDocument();
    
    const viewMoreButton = await waitForElement(() => getAllByText('View More'))
    fireEvent.click(viewMoreButton[0])

    const nicnkNamEl = await waitForElement( () => getByText("the Darkin Blade")) 
    expect(nicnkNamEl).toBeInTheDocument();

    const blurbEl = await waitForElement( () => getByText("Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...")) 
    expect(blurbEl).toBeInTheDocument();

    const infoCardNameEl = await waitForElement( () => getByText("Aatrox")) 
    expect(infoCardNameEl).toBeInTheDocument();

    const favoriteButtonEl = await waitForElement( () => getByText("Favorite")) 
    expect(favoriteButtonEl).toBeInTheDocument();

    const favoriteButton = await waitForElement(() => getByText('Favorite'))
    fireEvent.click(favoriteButton)

    const favoriteCountEl = await waitForElement( () => getByText("1 Favorites")) 
    expect(favoriteCountEl).toBeInTheDocument();

    const viewFavoritesButton = await waitForElement(() => getByText('1 Favorites'))
    fireEvent.click(viewMoreButton[0])

    const favoritedHeroEl = await waitForElement( () => getByText("Aatrox")) 
    expect(favoritedHeroEl).toBeInTheDocument();
});
});

