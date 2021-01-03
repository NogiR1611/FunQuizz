import React,{Component} from "react";
import "../css/style.css";

class SkorTerakhir extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : ""
        }
    }

    componentWillMount(){
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                username : AppState.username
            });
        }
    }

    render(){
        const {username} = this.state;
        return (
            <div className="container d-flex align-items-center">
                <div className="center-component">
                    <p>Hai {username},Skor terakhir kamu yaitu : </p>
                    <p>Jawaban Benar - 36 </p>
                    <p>Jawaban Salah - 4 </p>
                    <p>Sehingga kamu memiliki nilai skor kamu :</p>
                    <span className="nilai-skor">90</span><br/>
                    <p>Waw kamu cerdas sekali</p>
                    <p>Tetap semangat terus belajarnya yah</p>
                </div>
            </div>
        );
    }
}

export default SkorTerakhir;