import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroesScreen = () => {
    
    const params = useParams();
    useEffect(() => {
        console.log(params);
      });
    

    return (
        <div>
            <h1>HEROES Screen</h1>
        </div>
    )
}
