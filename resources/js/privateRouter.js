import React from 'react';
import {
    Redirect,
    Route
} from 'react-router-dom';

let state_of_state = localStorage["appState"];
if (!state_of_state) {
    let appState = {
        isLoggedIn: false,
        email : "",
        username : ""
    };
    localStorage["appState"] = JSON.stringify(appState);
}

let state = localStorage["appState"];
let AppState = JSON.parse(state);

const Auth = {
    isLoggedIn: AppState.isLoggedIn
};

const PrivateRoute = ({component: Component,...rest}) => (
    <Route {...rest} render = {
        props => Auth.isLoggedIn ?
            (<Component {...props}/>) : 
            (<Redirect to={{
                pathname : "/",
                state : {
                    from : props.location
                },
            }}
            />)
    }/>
);

export default PrivateRoute;