import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import "../css/style.css";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
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
            email : this.state.email,
            password : this.state.password
        };

        axios.post('/login',data)
        .then(res =>{
            let userData = {
                id : res.data.id,
                username : res.data.username,
                email : res.data.email
            };

            let appState = {
                isLoggedIn : true,
                username : userData.username,
                email : userData.email
            };
            localStorage["appState"] = JSON.stringify(appState);
            this.setState({
                isLoggedIn : appState.isLoggedIn,
                redirect : true,
                username : appState.username
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        const {email,password,redirect} = this.state;
        const {from} = this.props.location.state || {from: {pathname : '/home'}};

        if (redirect){
            return (<Redirect to={from}/>);
        }
        return (
            <container>
                <div className="bg-login row rounded">
                <form className="p-3 border col-sm-4 form-login" onSubmit={this.onSubmit}>
                    <p className="align-middle">Ayo masukin username dan password kamu</p>
                    <input type="hidden" name="csrf-token" value="{{{ csrf_token() }}}" />
                    <div className="mb-8">
                        <label class="form-label">Email : </label><br/>
                        <input
                            class="form-control"
                            type="text"
                            value={email}
                            onChange={event => this.setState({ email : event.target.value })}
                            name="email"
                        />
                    </div>    
                    <br/>
                    <div className="mb-8">
                        <label class="form-label">Password : </label><br/>
                        <input
                            class="form-control"
                            type="password"
                            value={password}
                            onChange={event => this.setState({ password : event.target.value })}
                            name="password"
                        />
                    </div>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Masuk</button>
                    </div>
                    <p>Kamu belum punya akun?<a href="/register">Daftar Sini</a></p>
                </form>
                </div>
            </container>
        );
    }
}

export default Login;