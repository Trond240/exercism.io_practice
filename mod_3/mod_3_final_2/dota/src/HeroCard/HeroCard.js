import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/HeroCard/HeroCard.css';

export const HeroCard = (props) => {
    console.log(props)
    return(
        <section className='hero-card'>
            <h2>{props.name}</h2>
            {/* <div className='stat-div'>
                <p className='attack'>ATK: {props.attack}</p>
                <p className='defense'>DEF: {props.defense}</p>
            </div> */}
            <img className='full-card-image' src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${props.fullImage}`} alt={`${props.name}-image`}/>
            {/* <img className='full-card-image' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_4.jpg`} alt="hero-image"/> */}

            <div className='button-div'>
                <button><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/SummonerFlash.png'}/></button>
                <Link to={`/champion/${props.id}`}>
                    <button><img className='butt-image' src={'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/FlashFrost.png'}/></button>
                </Link>
            </div>
            {/* <img className='sprite-card-image' src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/sprite/${props.spriteImage}`} alt="hero-image"/> */}


        </section>
    )
}