import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';


export const RouterApp = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
      <div>
        
        <Switch>
          <PublicRoutes exact path = "/login" component = { LoginScreen } isAuthenticated = {user.logged}/>

          <PrivateRoutes path = "/" component = { DashBoardRoutes } isAuthenticated = {user.logged}/>
        </Switch>
      </div>
    </Router>
    )
}
