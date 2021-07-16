import React, {useMemo} from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroesCard } from '../heroes/HeroesCard'
import { getHeroeByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [{searchText}, handleInputChange, reset] = useForm({
        searchText: q
    });

    const heroesFiltered = useMemo(() => getHeroeByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchText.trim().length <= 1){
            alert('El campo esta vacio');
            return;
        }
        history.push(`?q=${searchText}`)

        reset();
    }
    return (
        <div>
            <h4>Search Screen</h4>
            <hr/>

            <div className = "row">
                <div className = "col-5">
                    <h4>Search Form</h4>
                    <hr/>
                        <form onSubmit = {handleSearch}>
                            <input 
                                type = "text"
                                name = "searchText"
                                className = "form-control"
                                placeholder = "Find your hero"
                                autoComplete = "off"
                                value = {searchText}
                                onChange={handleInputChange}
                            />

                            <button
                                type = "submit"
                                className = "btn m-1 btn-block btn-outline-primary"
                                
                            >
                                Search
                            </button>
                        </form>
                </div>

                <div className = "col-7">
                  <h4>Results</h4>
                  <hr />

                    {
                        (q === '')
                        &&
                        <div className = "alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className = "alert alert-danger animate__animated animate__shakeX">
                            Ups!!! There is not a valid name of Hero
                        </div>
                    }

                  {
                      heroesFiltered.map(hero => (
                          <HeroesCard 
                            key = {hero.id}
                            {...hero}
                          />
                      ))
                  }
                </div>

            </div>
        </div>
    )
}
