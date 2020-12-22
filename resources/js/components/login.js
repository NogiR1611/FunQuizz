import React,{Component} from "React";
import ReactDOM from 'react-dom';

class Login extends Component{
    render(){
        return (
            <React.Fragment>
                <form action="/login" method="POST">
                    <label>Username : </label>
                    <input type="text" name="username"></input>
                    <label>Password : </label>
                    <input type="password" name="password"></input>
                    <button type="submit"></button>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;