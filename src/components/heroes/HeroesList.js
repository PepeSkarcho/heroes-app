import React, {useMemo} from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroesCard } from './HeroesCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() =>  getHeroesByPublisher(publisher), [publisher]);


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
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
