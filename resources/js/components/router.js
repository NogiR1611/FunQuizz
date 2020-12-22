import React,{Component} from "reactjs";
import {BrowserRouter as Router,Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import Index from './index';
import Login from './login';

class Router extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Index} />
                <Route path="/login" component={Login} />
            </Router>
        );
    }
}

export default Router;

if (document.getElementById('root')) {
    ReactDOM.render(<Router />, document.getElementById('root'));
}