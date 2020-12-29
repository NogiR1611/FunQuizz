import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import Index from './index';
import Login from './login';
import Register from './register';
 
class Routers extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={() => <Index user={this.props.user} />} />
                <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;

if(document.getElementById('root')){
    let user = document.getElementById("root").getAttribute("data");
    ReactDOM.render(<Routers user={user} />, document.getElementById('root'));
}