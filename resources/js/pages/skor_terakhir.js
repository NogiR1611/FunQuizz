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
        let user = localStorage["appState"];
        if(user) {
            let User = JSON.parse(user);
            this.setState({ username:User.username })
        }

        let score = localStorage["userScore"];
        if (score) {
            let UserScore = JSON.parse(score);
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
            statement = "Waw bagus sekali hasil kamu dan terus pertahankan belajarnya";
        }
        return (
            <container>
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center result-score">
                    <p>Hai {username},skor terakhir kamu yaitu : </p>
                    <p>Jawaban Benar - {benar} </p>
                    <p>Jawaban Salah - {salah} </p>
                    <p>Sehingga kamu memiliki nilai skor yaitu :</p>
                    <span className="nilai-skor">{score}</span><br/>
                    <p>{statement}</p>
                    <p>Tetap semangat terus belajarnya yah</p>
                    <div>
                        <a href="/pertanyaan" className="button-navigation" id="try-quiz">Coba kuis</a>
                        <a href="/home" className="button-navigation" id="back-menu">Kembali</a>
                    </div>
                </div>
            </container>
        );
    }
}

export default SkorTerakhir;