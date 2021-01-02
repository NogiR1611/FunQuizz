import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

class Register extends Component{
    state = {
        username : "",
        email : "",
        password : "",
        confirm_password : "",
        redirect : false
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {password,confirm_password} = this.state;
        const data = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            confirm_password : this.state.confirm_password
        }

        if(password !== confirm_password){
            alert("password tidak masuk");
        }
        else{
            axios.post('/register',data)
            .then(res =>{ 
                console.log(res);
                this.setState({ redirect : true });
            })
            .catch(err => console.log(err));
        }
    }

    render(){
        const {username,email,password,confirm_password} = this.state;
        if(redirect){
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <span id="message"></span>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="csrf-token" value="{{{ csrf_token() }}}" />
                    <label>Username : </label><br/>
                    <input
                        type="text"
                        value={username}
                        onChange={event => this.setState({ username : event.target.value})}
                    required/><br/>
                    <label>Email : </label><br/>
                    <input
                        type="text"
                        value={email}
                        onChange={event => this.setState({ email : event.target.value})}
                    required/><br/>
                    <label>Password : </label><br/>
                    <input
                        type="password"
                        id="password" 
                        value={password}
                        onChange={event => this.setState({ password : event.target.value})}
                    required/><br/>
                    <label>Konfirmasi Password : </label><br/>
                    <input
                        type="password"
                        id="confirm_password"
                        value={confirm_password}
                        onChange={event => this.setState({ confirm_password : event.target.value})}
                    required/><br/>
                    <button type="submit">masuk</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Register;