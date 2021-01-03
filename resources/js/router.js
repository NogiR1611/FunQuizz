import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ListMateri from './pages/list_materi';
import Materi from './pages/isi_materi';
import SkorTerakhir from './pages/skor_terakhir';
import PrivateRouter from './privateRouter';
 
class Routers extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRouter path="/home" component={Home} />
                <PrivateRouter path="/list-materi" component={ListMateri} />
                <PrivateRouter path="/list-materi/:id" component={Materi} />
                <PrivateRouter path="/skor-terakhir" component={SkorTerakhir} />
                <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;

if(document.getElementById('root')){
    ReactDOM.render(<Routers />,document.getElementById('root'));
}