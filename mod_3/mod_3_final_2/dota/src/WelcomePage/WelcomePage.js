import React from 'react';
import { Link } from 'react-router-dom';


export const WelcomePage = () => {
    return (
        <section>
            <h1>Welcome!</h1>
            <Link to='/heros'>
                <img src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/sprite/spell0.png'}/>
            </Link>
        </section>
    )
}