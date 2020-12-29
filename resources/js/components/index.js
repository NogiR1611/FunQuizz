import React,{Component} from 'react';
import axios from "axios";

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : ""
        };
    }

    componentDidMount(){
        /*
        axios.get('/user-api')
        .then( re)
        .catch()
        */
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">I'm an example component!</div>
                            <p>{this.props.user}</p>
                            <a href="/logout">logout</a>
                            <a href="/user-api">API</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;