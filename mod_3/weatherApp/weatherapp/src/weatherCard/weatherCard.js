import React from 'react';
import '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherCard/weatherCard.css';

//create fetch for icon, import api call, add fetch call to the map

export const WeatherCard = (props) => {
    const weatherInfo = props.weather.map(info => {
        let imageSrc = `http://openweathermap.org/img/wn/${info.icon}@2x.png`
        return (
            <div>
                <p>{info.main}</p>
                <p>{info.description}</p> 
                <img className='weather-card-image' src={imageSrc} alt="weather-image"
                />
            </div>
        )
    })

    let mathHigh =  (Math.round(props.high - 273.15) * 9/5 + 32);
    let mathLow = (Math.round(props.low - 273.15) * 9/5 + 32);
    let date = new Date(props.date*1000).toDateString();

    return(
        <section className='weather-card'>
            <h1>{date}</h1>
                {weatherInfo}
            <p>High: { mathHigh } &#8457;</p>
            <p>Low: {mathLow} &#8457;</p>
        </section>
    )
}

//round temp numbers!!!!