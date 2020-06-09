import React from 'react';
import '././WelcomePage.css';
import { Link } from 'react-router-dom';


export const WelcomePage = () => {
    return (
        <section className='welcome-page'>
            <h1>Welcome! Please Click to Enter</h1>
            <Link to='/champions'>
                <img alt='welcome-photo' className='welcome-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/sprite/spell0.png'}/>
            </Link>
        </section>
    )
}