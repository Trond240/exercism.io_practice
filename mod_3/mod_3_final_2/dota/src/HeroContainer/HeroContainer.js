import React from 'react';
import { HeroCard } from '/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/HeroCard/HeroCard.js';
import '././HeroContainer.css';

export const HeroContainer = (props) => {
    const allHeros = props.allHeroInfo;

    const heroInfo = Object.keys(allHeros).map(hero => {
        return (
            <HeroCard 
                key={allHeros[hero].key}
                id={allHeros[hero].key}
                name={allHeros[hero].name}
                fullImage={allHeros[hero].image.full}
                spriteImage={allHeros[hero].image.sprite}
                group={allHeros[hero].image.group}
                attack={allHeros[hero].info.attack}
                defense={allHeros[hero].info.defense}
                difficulty={allHeros[hero].info.difficulty}
                magic={allHeros[hero].info.magic}
                partype={allHeros[hero].partype}
                tags={allHeros[hero].tags}
                title={allHeros[hero].title}
                fecthImage={props.fetchImage}
                addToFavorites={props.addToFavorites}
                removeFromFavorites={props.removeFromFavorites}
                favorites={props.favorites}
            />
        )
    })

    return(
    <section className='hero-container'>
        {heroInfo}
    </section>
    )
} 