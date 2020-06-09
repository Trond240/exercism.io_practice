import React from 'react';
import { NavLink } from 'react-router-dom';
import '././NavBar.css';

export const NavBar = (props) => {
    return(
    <nav className='nav-bar'>
        <section className='user-info-container'> 
            <h2>LEAGUE-IT!</h2>
        </section>
        <section className='nav-btn-container'>
        <NavLink to='/favorites'>
            <button className='nav-btn' disabled={props.favorites.length === 0}> {`${props.favorites.length}`} {props.favorites.length > 0 ? ` Favorites` : `No Favorites`}</button>
        </NavLink>
        <NavLink to= '/champions'>  
            <button className='nav-btn'>Champions</button>  
        </NavLink>
        <NavLink to='/'>
            <button className='nav-btn'>Home Page</button>
        </NavLink>
        </section>
    </nav>
)
}