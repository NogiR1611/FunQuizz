import React,{Component} from "react";
import PostData from "../data/materi.json";
import "../css/style.css";

class Materi extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            image : "",
            description : ""
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        
        this.setState({
            name : PostData[id-1]['name'],
            image : PostData[id-1]['image'],
            description : PostData[id-1]['deskripsi']
        })
    }

    render(){
        const {name,image,description} = this.state;
        return (
            <div className="item-page">
                <div className="text-center m-5">
                    <h3>{name}</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={image} className="image-item" alt="" />
                    </div>
                    <div className="col">
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Materi;