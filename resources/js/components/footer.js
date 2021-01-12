import React,{Component} from "react";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="position-absolute card">
                <p>Copyright&copy;2020 FunQuizz</p>
            </div>
        );
    }
}

export default Footer;