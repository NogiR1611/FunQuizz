import React,{Component} from "react";
import PostData from "../data/materi.json";
import { useSpeechSynthesis } from "react-speech-kit";
import "../css/style.css";

const Speech = (props) => {
    const {speak} = useSpeechSynthesis();
    return (
        <button onClick={() => speak({text:props.text })}>Nyala</button>
    );
}

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
            <container>
                <div className="item-page">
                    <div className="text-center text-white m-5">
                        <h3>{name}</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={image} className="image-item" alt="" />
                        </div>
                        <div className="col">
                            <p className="description text-white">{description}</p>
                        </div>
                    </div>
                </div>
                <Speech text={description}/>
            </container>
        );
    }
}

export default Materi;