import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom'
import { NavBar } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/navBar/navBar.js';
// import { fetchDailyCast } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js';
// jest.mock('/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js');

describe('WeatherCard', () => {
    it('renders text that we expect', async () => {
    const { getByText } = render(<NavBar />);

        const welcomeEl = getByText("Welcome! Todays Forcast");
        expect(welcomeEl).toBeInTheDocument();
    })
})