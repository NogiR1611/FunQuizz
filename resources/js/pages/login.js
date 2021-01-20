import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import "../css/style.css";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            redirect : props.redirect,
            isLoggedIn : false
        }
    }

    /*
    componentDidMount(){
        const {prevLocation} = this.state.redirect || { prevLocation: { pathname: '/home' } };
        if(prevLocation && this.state.isLoggedIn){
            return this.props.history.push(prevLocation);
        }
    }
    */

    onSubmit = (event) => {
        event.preventDefault();
        const data = {
            username : this.state.username
        };

        if(!data.username){
            alert("Ayo isi dulu nama kamu");
            return (
                <Redirect to= "/" />
            );
        }

        else{
            let appState = {
                isLoggedIn : true,
                username : data.username
            };
            
            localStorage["appState"] = JSON.stringify(appState);
            this.setState({
                isLoggedIn : appState.isLoggedIn,
                redirect : true,
                username : appState.username
            });
        }
    }

    render(){
        const {username,redirect} = this.state;
        const {from} = this.props.location.state || {from: {pathname : '/home'}};

        if (redirect){
            return (<Redirect to={from}/>);
        }
        return (
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-login">
                <form className="p-3 border form-login" onSubmit={this.onSubmit}>
                    <p className="align-middle">Ayo masukin nama kamu</p>
                    <input type="hidden" name="csrf-token" value="{{{ csrf_token() }}}" />
                    <div className="text-center mb-8">
                        <label class="form-label fs-5">Nama : </label><br/>
                        <input
                            class="form-control"
                            type="text"
                            value={username}
                            onChange={event => this.setState({ username : event.target.value })}
                            name="username"
                            placeholder="Ayo isi nama kamu"
                        />
                    </div>    
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Masuk</button>
                    </div>
                </form>
                </div>
        );
    }
}

export default Login;