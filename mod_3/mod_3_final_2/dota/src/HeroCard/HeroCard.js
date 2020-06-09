import React from 'react';
import { Link } from 'react-router-dom';
import '././HeroCard.css';

export const HeroCard = (props) => {
    let favorites = props.favorites; 
    
    let favoriteOrUnfavoriteBtn;

    if(favorites.includes(props.id)) {
        favoriteOrUnfavoriteBtn = <button id={props.id} onClick={() => props.removeFromFavorites(props.id)}><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/1001.png'} alt='un-favorite-image'/>Un-favorite</button> 
    } else {
        favoriteOrUnfavoriteBtn = <button id={props.id} onClick={() => props.addToFavorites(props.id)}><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/FlashFrost.png'} alt='favorite-image'/>Favorite</button>
    }
    return(
        <section className='hero-card'>
            <h2>{props.name}</h2>
            <img className='full-card-image' src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${props.fullImage}`} alt={`${props.name}-image`}/>
            <div className='button-div'>
                {favoriteOrUnfavoriteBtn}
                <Link to={`/champions/champion/${props.id}`}>
                    <button><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/SummonerFlash.png'} alt='wiew-more-image'/>View More</button>
                </Link>
            </div>
        </section>
    )
}