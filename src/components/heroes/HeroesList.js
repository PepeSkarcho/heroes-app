import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroesCard } from './HeroesCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map(hero => (
                    <HeroesCard 
                    key = {hero.id} 
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
