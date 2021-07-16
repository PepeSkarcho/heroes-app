import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({ history }) => {
    
    
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById( heroeId ), [heroeId])

    if (!hero){
        return <Redirect to = "/"/>
    }

    const handleReturn = () => {

        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero
    

    return (
        <div className = "row mt-5 ">
            <div className = "col-4">
                <img
                    src = { `../assets/heroes/${ heroeId }.jpg` }
                    alt = { superhero }
                    className = "img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className = "col-8 animate__animated animate__fadeIn">
                <h3><i>{superhero}</i></h3>
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item"><b>Alter ego: </b> {alter_ego} </li>
                    <li className = "list-group-item"><b>Publisher: </b> {publisher} </li>
                    <li className = "list-group-item"><b>First Appearance: </b> {first_appearance} </li>
                </ul>
                <hr/>
                <div className = "col-2">
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item"><b>Characters: </b> {characters} </li>
                </ul>    
                </div>

                <div className = "col-2">
                    <button 
                        className = "btn btn-primary mt-2"
                        onClick = {handleReturn}
                    >
                        Regresar
                    </button>
                </div>

            </div>    

        </div>
    )
}
