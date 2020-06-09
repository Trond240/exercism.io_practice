import React from 'react';
import '././HeroInfoConatiner.css';

export const HeroInfoContainer = (props) => {
    let favoriteOrUnfavoriteBtn;
    let matchId = (props.foundHero.key)
    console.log(props)


    if(props.favorites.includes(matchId)) {
        favoriteOrUnfavoriteBtn = <button id={props.foundHero.key} onClick={() => props.removeFromFavorites(matchId)}><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/1001.png'} alt='un-favorite-image'/>Un-favorite</button> 
    } else {
        favoriteOrUnfavoriteBtn = <button id={props.foundHero.key} onClick={() => props.addToFavorites(matchId)}><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/FlashFrost.png'} alt='favorite-image'/>Favorite</button>
    }
    return (
        <section className='info'>
            <div className='info-div'>
                <img className='full-image' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.foundHero.name}_4.jpg`} alt={`champion-${props.foundHero.name}-image`}/>
            </div>
            <div className='info-div'>
                <h1 className='hero-name'>{props.foundHero.name}</h1>
                <h3 className='hero-nick-name'>{props.foundHero.title}</h3>
                <h3>{props.foundHero.blurb}</h3>
                <h3>Partype: {props.foundHero.partype}</h3>
                <h3>ATK Power: {props.foundHero.info.attack}</h3>
                <h3>Defense: {props.foundHero.info.defense}</h3>
                <h3>Difficulty: {props.foundHero.info.difficulty}</h3>
                <h3>Magic: {props.foundHero.info.magic}</h3>
            </div>
            <div className='info-div'>
            <h1 className='hero-name'>Stats:</h1>
                <h1>Armor: {props.foundHero.stats.armor}</h1>
                <h3>Attack Damage: {props.foundHero.stats.attackdamage}</h3>
                <h3>Attack Range: {props.foundHero.stats.attackrange}</h3>
                <h3>Attack Speed: {props.foundHero.stats.attackspeed}</h3>
                <h3>Crit: {props.foundHero.stats.crit}</h3>
                <h3>HP: {props.foundHero.stats.hp}</h3>
                <h3>Movement Speed: {props.foundHero.stats.movespeed}</h3>
                <h3>Spell Block: {props.foundHero.stats.spellblock}</h3>
                <h3>MP: {props.foundHero.stats.mp}</h3>
                {favoriteOrUnfavoriteBtn}
            </div>
        </section>
    )
}