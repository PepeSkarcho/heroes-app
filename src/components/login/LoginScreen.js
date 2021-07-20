import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch ({
            type: types.login,
            payload: {
                name: 'Alfredo'
            }
        })
       history.replace(lastPath);
    }

    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <h1>Login Screen</h1>
            <hr />
            <button 
            className="btn btn-success"
            onClick = { handleLogin }
            >
                Login
            </button>
        </div>
    )
}
