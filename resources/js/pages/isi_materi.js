import React,{Component,useState} from "react";
import PostData from "../data/materi.json";
import {useSpeechSynthesis} from "react-speech-kit";
import "../css/style.css";

const Speech = (props) => {
    const [rate,setRate] = useState(1);
    const { speak,voices,cancel,speaking } = useSpeechSynthesis();
    const voice = voices[9];

    return (
        <div className="text-white button-speed">
            <p className="kecepatan">Kecepatan Suara : {rate}</p>
            <input
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
                onChange={ (event) => {
                    setRate(event.target.value);
                }}
            /><br/>
            { speaking ?
            (
                <button onClick={cancel} className="btn btn-primary">
                    <img src={"/images/stop.png"} className="stop-icon" />
                    Berhenti
                </button>
            )
            :
            (
                <button
                    onClick={() => {
                        speak({ text:props.text,voice,rate });
                        
                    }}
                    className="btn btn-primary"
                 >
                    <img src={"/images/speaker.png"} className="speaker-icon" />
                    Nyalakan Suara
                </button>
            )
            }
        </div>
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
        const {name} = this.props.match.params;
        const result = PostData.filter( item => {
            return item.name === name;
        });
        const id = result[0].id;

        this.setState({
            name : PostData[id-1]["name"],
            image : PostData[id-1]["image"],
            description : PostData[id-1]["deskripsi"]
        });

        /*
        this.setState({
            name : PostData[id - 9]['name'],
            image : PostData[id - 9]['image'],
            description : PostData[id - 9]['deskripsi']
        })
        */
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
                    <div className="column-button">
                        <a href="/pertanyaan" className="button-navigation" id="try-quiz">Coba kuis</a>
                        <a href="/list-materi" className="button-navigation" id="back-menu">Kembali</a>
                    </div>
                </div>
        );
    }
}

export default Materi;