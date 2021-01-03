import React,{Component} from "react";
import PostData from "../data/materi.json";

class Materi extends Component{
    constructor(props){
        super(props);
        this.state = {
            Data : []
        }
    }

    render(){
        console.log(this.props);
        return (
            <div className="">
                <h1>test</h1>
            </div>
        );
    }
}

export default Materi;