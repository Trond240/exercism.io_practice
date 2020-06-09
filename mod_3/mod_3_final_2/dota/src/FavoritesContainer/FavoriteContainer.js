import React from 'react';
import { HeroCard } from '/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/HeroCard/HeroCard.js';
import '././FavoriteContainer.css';

export const FavoriteContainer = (props) => {
    console.log(props.favoriteObjects)

    const favoriteHeros = props.favoriteObjects.map(hero => {
        return (
            <HeroCard 
                key={hero.key}
                id={hero.key}
                name={hero.name}
                fullImage={hero.image.full}
                spriteImage={hero.image.sprite}
                group={hero.image.group}
                attack={hero.info.attack}
                defense={hero.info.defense}
                difficulty={hero.info.difficulty}
                magic={hero.info.magic}
                partype={hero.partype}
                tags={hero.tags}
                title={hero.title}
                addToFavorites={props.addToFavorites}
                removeFromFavorites={props.removeFromFavorites}
                favorites={props.favorites}
            />
        )
    })

    return(
    <section className='favorite-heading'>
        <h1>Favorites</h1>
        <div className='favorite-container'>
        { favoriteHeros }
        </div>
    </section>
    )
} 