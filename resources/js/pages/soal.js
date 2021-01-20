import React,{Component} from "react";
import Questions from "../data/soal.json";
import "../css/style.css";

class Soal extends Component{
    constructor(){
        super();
        this.state = {
            User : "",
            Data : [],
            currentQuestion : 0,
            Score : 0,
            showScore : false,
        }
    }

    componentWillMount(){
        let state = localStorage["appState"];
        if(state){
            let AppState = JSON.parse(state);
            this.setState({ User:AppState.username });
        }
    }

    componentDidMount(){
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        this.setState({
            Data : shuffle(Questions)
        });
    }


    handleAnswerButtonClick = (isCorrect) => {
        const {Score} = this.state;
        const addScore = Score + 1;
        if(isCorrect === true){
            this.setState({ Score : addScore });
        }

        const {currentQuestion} = this.state;
        const nextQuestion = currentQuestion + 1;
        if( nextQuestion < Questions.length ){
            this.setState({ currentQuestion : nextQuestion });
        }
        else{
            this.setState({ showScore : true })
        }
    }

    render(){
        const {User,Score,showScore,currentQuestion} = this.state;
        let totalQuestion = Questions.length;
        let result = Score/totalQuestion * 100;
        let falseAnswer = totalQuestion - Score;
        let state = "";
        if (result < 60){
            state = "Haduh kamu harus belajar lebih rajin lagi yah";
        }
        else if(result < 80){
            state = "Hasil kamu sudah lumayan jadi tingkatkan lagi yah";
        }
        else{
            state = "Waw bagus sekali hasil kamu dan terus pertahankan belajarnya";
        }
        let value = {
            nilai : result,
            true : Score,
            false : falseAnswer
        };

        localStorage["userScore"] = JSON.stringify(value);
        return (
            <React.Fragment>
                {showScore ? (
                    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center result-score">
                        <p>Hai {User}</p>
                        <p>jawaban benar kamu yaitu {Score} dari {Questions.length} soal</p>
                        <p>Jawaban salah kamu yaitu {falseAnswer} dari {Questions.length} soal</p>
                        <p>Jadi nilai kamu yaitu :</p>
                        <span>{result}</span>
                        <p>{state}</p>
                        <div className="">
                            <a href="/pertanyaan" className="button-navigation" id="try-quiz">Coba Lagi</a>
                            <a href="/home" className="button-navigation" id="back-menu">Kembali</a>
                        </div>
                    </div>
                ) : (
                <div className="text-white">
                    <div className="text-center m-5">
                        <h2>Soal ke - {currentQuestion + 1} dari {Questions.length}</h2>
                    </div>
                    <div class="row soal-container">
                        <div className="col-sm-5">
                            <img src={Questions[currentQuestion].imageQuestion} className="image-question" alt="" />
                        </div>
                        <div className="col-sm-7">
                            <p className="fs-2">Apakah nama benda yang ada di samping ?</p>
                            {Questions[currentQuestion].answerOptions.map((answerOption,index) => (
                                <button
                                    onClick={() => this.handleAnswerButtonClick(answerOption.isCorrect)}
                                    key={index}
                                    className="button-answer fs-2"
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                )}
            </React.Fragment>
        );
    }
}

export default Soal;