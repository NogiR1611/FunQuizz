import React,{Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="card shadow">
                <div className="d-flex justify-content-center">
                    <img src={"http://localhost:8000/images/logo.png"} alt="" />
                </div>
                <div className="w-10 d-inline-block component-login">

                </div>
            </div>
        );
    }
}

export default Header;