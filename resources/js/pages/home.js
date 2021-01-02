import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../components/header';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
            username : "",
            email : "",
            redirect : false
        }
    }

    componentWillMount(){
        let state = localStorage["appState"];
        if (state){
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn : AppState.isLoggedIn,
                username : AppState.username
            });
        }
    }

    Logout = () => {
        let appState = {
            isLoggedIn : false,
            email : "",
            username : ""
        };
        
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
            isLoggedIn : false,
            email : "",
            username : "",
            redirect : true
        });
    }

    render(){
        const {username,redirect} = this.state;
        if (redirect){
            return <Redirect to="/" />;
        }

        return (
            <React.Fragment>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                        home
                        </div>
                        <div class="col-md-4">
                        {username}
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button onClick={this.Logout}>Logout</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;