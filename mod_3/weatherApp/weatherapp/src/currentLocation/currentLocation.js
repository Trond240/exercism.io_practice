import React from 'react';
import '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/currentLocation/currentLocation.css';

export const CurrentLocation = (props) => {
    console.log(props.currentLocation.weather)
    const weatherInfo = props.currentLocation.weather.map(info => {
        let imageSrc = `http://openweathermap.org/img/wn/${info.icon}@2x.png`
        return (
            <section>
                <h1>{info.description}</h1>
                <img className='weather-image' src={imageSrc}
                />
            </section>
        )
    })

    let currentTemp = (Math.round(props.currentLocation.main.temp - 273.15) * 9/5 + 32);
    let mathHigh =  (Math.round(props.currentLocation.main.temp_max - 273.15) * 9/5 + 32);
    let mathLow = (Math.round(props.currentLocation.main.temp_min - 273.15) * 9/5 + 32);
    let date = new Date(props.currentLocation.dt*1000).toDateString();


    return (
        <section className='current-location-area'>
            <h1>Location: {props.currentLocation.name}</h1>
            <h1>{date}</h1>
            <h1>{currentTemp}  &#8457;</h1>
            {weatherInfo}
            <h1>High: {mathHigh}  &#8457;</h1>
            <h1>Low: {mathLow}  &#8457;</h1>
        </section>
    )
}