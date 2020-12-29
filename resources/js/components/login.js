import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            redirect : false
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const data = {
            email : this.state.email,
            password : this.state.password
        };

        axios.post('/login',data)
        .then(res =>{
            console.log(res)
            this.setState({ redirect : true });
        })
        .catch(err => console.log(err));
    }

    render(){
        const {email,password,redirect} = this.state;
        
        if(redirect){
            return <Redirect to="/home" />;
        }

        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="csrf-token" value="{{{ csrf_token() }}}" />
                    <label>Email : </label><br/>
                    <input
                        type="text"
                        value={email}
                        onChange={event => this.setState({ email : event.target.value })}
                        name="email" />
                    <br/>
                    <label>Password : </label><br/>
                    <input
                        type="password"
                        value={password}
                        onChange={event => this.setState({ password : event.target.value })}
                        name="password" />
                    <br/>
                    <button type="submit">Masuk</button>
                </form>
                <a href="/register">Register</a>
            </React.Fragment>
        );
    }
}

export default Login;