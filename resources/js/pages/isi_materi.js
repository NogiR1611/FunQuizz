import React,{Component} from "react";
import PostData from "../data/materi.json";
import {useSpeechSynthesis} from "react-speech-kit";
import "../css/style.css";

const Speech = (props) => {
    const { speak,voices } = useSpeechSynthesis();
    const voice = voices[9];
    return (
        <button onClick={() => speak({ text:props.text,voice }) } className="btn btn-primary fs-3">
            <img src={"http://localhost:8000/images/speaker.png"} className="speaker-icon" />
            Nyalakan Suara
        </button>
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
                            <Speech text={description}/>
                        </div>
                    </div>
                    <div className="">
                        <a href="/pertanyaan" className="button-navigation" id="try-quiz">Coba kuis</a>
                        <a href="/home" className="button-navigation" id="back-menu">Kembali</a>
                    </div>
                </div>
        );
    }
}

export default Materi;