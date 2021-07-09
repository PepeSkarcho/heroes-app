import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/dc/DcScreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path = "/marvel" component= {MarvelScreen} />
                    <Route exact path = "/hero/:heroeId" component = {HeroesScreen}/>
                    <Route exact path = "/dc" component = {DcScreen}/>

                    <Redirect to = "/marvel"/>
                </Switch>
            </div>
        </>
    )
}
