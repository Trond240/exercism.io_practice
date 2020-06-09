import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroInfoContainer  } from '././HeroInfoContainer.js';
import { BrowserRouter } from 'react-router-dom';



describe('Hero Info Container', () => {
    it('should Render hero details to the page', () => {
        const { getByText, getByAltText } = render(
            <BrowserRouter>
                <HeroInfoContainer 
                    foundHero={
                            {
                            version: '10.9.1',
                            id: 'Aatrox',
                            key: '266',
                            name: 'Aatrox',
                            title: 'the Darkin Blade',
                            blurb: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...',
                            info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
                            image: {
                                full: 'Aatrox.png',
                                sprite: 'champion0.png',
                                group: 'champion',
                                x: 0,
                                y: 0,
                                w: 48,
                                h: 48
                            },
                            tags: [ 'Fighter', 'Tank' ],
                            partype: 'Blood Well',
                            stats: {
                                hp: 580,
                                hpperlevel: 90,
                                mp: 0,
                                mpperlevel: 0,
                                movespeed: 345,
                                armor: 38,
                                armorperlevel: 3.25,
                                spellblock: 32.1,
                                spellblockperlevel: 1.25,
                                attackrange: 175,
                                hpregen: 3,
                                hpregenperlevel: 1,
                                mpregen: 0,
                                mpregenperlevel: 0,
                                crit: 0,
                                critperlevel: 0,
                                attackdamage: 60,
                                attackdamageperlevel: 5,
                                attackspeedperlevel: 2.5,
                                attackspeed: 0.651
                            }
                        }  
                    }                    
                    favorites={[]}
                />
            </BrowserRouter>
    )

    const nameOneEl = getByText('Aatrox');
    expect(nameOneEl).toBeInTheDocument(); 

    const nameTwoEl = getByText('the Darkin Blade');
    expect(nameTwoEl).toBeInTheDocument(); 

    const blurbEl = getByText('Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...');
    expect(blurbEl).toBeInTheDocument(); 

    const proTypeEl = getByText('Partype: Blood Well');
    expect(proTypeEl).toBeInTheDocument(); 

    const attackEl = getByText('ATK Power: 8');
    expect(attackEl).toBeInTheDocument(); 

    const deffenseEl = getByText('Defense: 4');
    expect(deffenseEl).toBeInTheDocument(); 

    const difficultyEl = getByText('Difficulty: 4');
    expect(difficultyEl).toBeInTheDocument(); 

    const magicEl = getByText('Magic: 3');
    expect(magicEl).toBeInTheDocument(); 

    const statsEl = getByText('Stats:');
    expect(statsEl).toBeInTheDocument(); 

    const armorEl = getByText('Armor: 38');
    expect(armorEl).toBeInTheDocument(); 

    const attackDamageEl = getByText('Attack Damage: 60');
    expect(attackDamageEl).toBeInTheDocument(); 

    const attackRangeEl = getByText('Attack Range: 175');
    expect(attackRangeEl).toBeInTheDocument(); 

    const attackSpeedEl = getByText('Attack Speed: 0.651');
    expect(attackSpeedEl).toBeInTheDocument(); 

    const critEl = getByText('Crit: 0');
    expect(critEl).toBeInTheDocument(); 

    const hpEl = getByText('HP: 580');
    expect(attackDamageEl).toBeInTheDocument(); 

    const movementEl = getByText('Movement Speed: 345');
    expect(attackDamageEl).toBeInTheDocument();
    
    const spellBlockEl = getByText('Spell Block: 32.1');
    expect(spellBlockEl).toBeInTheDocument();

    const mpEl = getByText('MP: 0');
    expect(mpEl).toBeInTheDocument();

    const favoriteBtn = getByText('Favorite');
    expect(favoriteBtn).toBeInTheDocument();

    const heroImageAlt = screen.getByAltText("favorite-image")
    expect(heroImageAlt).toBeInTheDocument(); 

    const favoriteImageAlt = screen.getByAltText("champion-Aatrox-image")
    expect(favoriteImageAlt).toBeInTheDocument(); 
});

it('should show if the hero has been favorited', () => {
    const { getByText, getByAltText } = render(
        <BrowserRouter>
            <HeroInfoContainer 
                foundHero={
                        {
                        version: '10.9.1',
                        id: 'Aatrox',
                        key: '266',
                        name: 'Aatrox',
                        title: 'the Darkin Blade',
                        blurb: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...',
                        info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
                        image: {
                            full: 'Aatrox.png',
                            sprite: 'champion0.png',
                            group: 'champion',
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 48
                        },
                        tags: [ 'Fighter', 'Tank' ],
                        partype: 'Blood Well',
                        stats: {
                            hp: 580,
                            hpperlevel: 90,
                            mp: 0,
                            mpperlevel: 0,
                            movespeed: 345,
                            armor: 38,
                            armorperlevel: 3.25,
                            spellblock: 32.1,
                            spellblockperlevel: 1.25,
                            attackrange: 175,
                            hpregen: 3,
                            hpregenperlevel: 1,
                            mpregen: 0,
                            mpregenperlevel: 0,
                            crit: 0,
                            critperlevel: 0,
                            attackdamage: 60,
                            attackdamageperlevel: 5,
                            attackspeedperlevel: 2.5,
                            attackspeed: 0.651
                        }
                    }  
                }                    
                favorites={['266']}
            />
        </BrowserRouter>
)

const nameOneEl = getByText('Aatrox');
expect(nameOneEl).toBeInTheDocument(); 

const nameTwoEl = getByText('the Darkin Blade');
expect(nameTwoEl).toBeInTheDocument(); 

const blurbEl = getByText('Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...');
expect(blurbEl).toBeInTheDocument(); 

const proTypeEl = getByText('Partype: Blood Well');
expect(proTypeEl).toBeInTheDocument(); 

const attackEl = getByText('ATK Power: 8');
expect(attackEl).toBeInTheDocument(); 

const deffenseEl = getByText('Defense: 4');
expect(deffenseEl).toBeInTheDocument(); 

const difficultyEl = getByText('Difficulty: 4');
expect(difficultyEl).toBeInTheDocument(); 

const magicEl = getByText('Magic: 3');
expect(magicEl).toBeInTheDocument(); 

const statsEl = getByText('Stats:');
expect(statsEl).toBeInTheDocument(); 

const armorEl = getByText('Armor: 38');
expect(armorEl).toBeInTheDocument(); 

const attackDamageEl = getByText('Attack Damage: 60');
expect(attackDamageEl).toBeInTheDocument(); 

const attackRangeEl = getByText('Attack Range: 175');
expect(attackRangeEl).toBeInTheDocument(); 

const attackSpeedEl = getByText('Attack Speed: 0.651');
expect(attackSpeedEl).toBeInTheDocument(); 

const critEl = getByText('Crit: 0');
expect(critEl).toBeInTheDocument(); 

const hpEl = getByText('HP: 580');
expect(attackDamageEl).toBeInTheDocument(); 

const movementEl = getByText('Movement Speed: 345');
expect(attackDamageEl).toBeInTheDocument();

const spellBlockEl = getByText('Spell Block: 32.1');
expect(spellBlockEl).toBeInTheDocument();

const mpEl = getByText('MP: 0');
expect(mpEl).toBeInTheDocument();

const favoriteBtn = getByText('Un-favorite');
expect(favoriteBtn).toBeInTheDocument();

const heroImageAlt = screen.getByAltText("un-favorite-image")
expect(heroImageAlt).toBeInTheDocument(); 

const favoriteImageAlt = screen.getByAltText("champion-Aatrox-image")
expect(favoriteImageAlt).toBeInTheDocument(); 
});
});



