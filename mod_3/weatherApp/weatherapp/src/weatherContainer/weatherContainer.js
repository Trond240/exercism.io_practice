import React from 'react';
import { WeatherCard } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherCard/weatherCard.js';
import '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherContainer/weatherContainer.css';

export const WeatherContainer = (props) => {
    const dailyUpdate = props.weatherCard.map(day => {
        return <WeatherCard 
            key={day.dt}
            date={day.dt}
            high={day.temp.max}
            low={day.temp.min}
            weather={day.weather}
        />
    })

    return (
        <section className='weather-container'>
            {dailyUpdate}
        </section>
    )
}