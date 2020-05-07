import React from 'react';
import {WeatherContainer} from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherContainer/weatherContainer.js';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchDailyCast } from '../apiCalls';
jest.mock('../apiCalls.js');

describe('weather container', () => {
    it('when the App loads, we should see an weather for the week', async() => {
        fetchDailyCast.mockResolvedValueOnce([
        {date: 1589047244, high: 289.95, low: 281.63, weather: Array(1)},
        {date: 1589047233, high: 281.95, low: 271.63, weather: Array(1)},
        {date: 1589047288, high: 189.95, low: 181.63, weather: Array(1)},
        ]);

        const { getByText } = render(<WeatherContainer />);

        const weatherContainer = getByText('WeatherCard Component');

        const card = await waitFor(() => getByText('1589047244'));

        expect(weatherContainer).toBeInTheDocument();
        expect(card).toBeInTheDocument();
    });
});