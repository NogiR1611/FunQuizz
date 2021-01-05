import React,{Component} from "react";
import PostData from "../data/materi.json";
import "../css/style.css";

class Materi extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            image : ""
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        
        this.setState({
            name : PostData[id-1]['name'],
            image : PostData[id-1]['image']
        })
    }

    render(){
        const {name,image} = this.state;
        return (
            <div className="item-page">
                <div className="text-center fs-2">
                    <h3>{name}</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={image} className="image-item" alt="" />
                    </div>
                    <div className="col">
                        <p>helo</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Materi;