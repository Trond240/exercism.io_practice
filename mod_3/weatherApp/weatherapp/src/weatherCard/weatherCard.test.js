import React from 'react';
import { render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import { WeatherCard } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherCard/weatherCard.js';
// import { fetchDailyCast } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js';
// jest.mock('/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js');

describe('WeatherCard', () => {
    it('renders text that we expect', async () => {
    const { getByText } = render(<WeatherCard
        date={'Fri May 08 2020'}
        high={'High: 64.4 ℉'}
        low={'Low: 39.2 ℉'}
        // weather={day.weather}
        />
        );
        // const dateEl = await waitFor(() => getByText('Fri May 08 2020'));
        // const dateEl = getByText('Fri May 08 2020');
        // expect(dateEl).toBeInTheDocument();

        const descriptionEl = getByText("the latest idea");
        expect(descriptionEl).toBeInTheDocument();
    })
})