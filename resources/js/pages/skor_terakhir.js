import React,{Component} from "react";
import "../css/style.css";

class SkorTerakhir extends Component{
    constructor(props){
        super(props);
        this.state = {
            score : 0,
            username : "",
            benar : 0,
            salah : 0
        }
    }

    componentWillMount(){
        let state = localStorage["userScore"];
        if (state) {
            let UserScore = JSON.parse(state);
            this.setState({
                benar : UserScore.true,
                salah : UserScore.false,
                score : UserScore.nilai
            });
        }
    }

    render(){
        const {username,score,benar,salah} = this.state;
        let statement = "";
        if(score === 0){
            statement = "Yah kamu belum kerjain soalnya";
        }
        else if(score<60){
            statement = "Haduh kamu harus belajar lebih rajin lagi yah";
        }
        else if(score<80){
            statement = "Hasil kamu sudah lumayan jadi tingkatkan lagi yah";
        }
        else{
            statement = "Waw bagus sekali hasil kamu";
        }
        return (
            <div className="container d-flex align-items-center">
                <div className="center-component">
                    <p>Hai {username},Skor terakhir kamu yaitu : </p>
                    <p>Jawaban Benar - {benar} </p>
                    <p>Jawaban Salah - {salah} </p>
                    <p>Sehingga kamu memiliki nilai skor yaitu :</p>
                    <span className="nilai-skor">{score}</span><br/>
                    <p>{statement}</p>
                    <p>Tetap semangat terus belajarnya yah</p>
                </div>
            </div>
        );
    }
}

export default SkorTerakhir;