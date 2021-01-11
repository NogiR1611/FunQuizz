import React,{Component} from "react";
import Questions from "../data/soal.json";
import "../css/style.css";

class Soal extends Component{
    constructor(){
        super();
        this.state = {
            Data : [],
            currentQuestion : 0,
            Score : 0,
            showScore : false,
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
        const {Score,showScore,currentQuestion} = this.state;
        let totalQuestion = Questions.length;
        let result = Score/totalQuestion * 100;
        let falseAnswer = totalQuestion - Score;
        let state = "";
        if (result<70){
            state = "kamu perlu terus belajar";
        }
        else{
            state = "kamu cerdas banget";
        }
        let value = {
            nilai : result,
            true : Score,
            false : falseAnswer
        };

        localStorage["userScore"] = JSON.stringify(value);
        return (
            <div className="">
                {showScore ? (
                    <div className="">
                        <p>jawaban benar kamu yaitu {Score} dari {Questions.length} </p>
                        <p>Jawaban salah kamu yaitu {falseAnswer} dari {Questions.length}</p>
                        <p>{result}</p>
                        <p>{state}</p>
                    </div>
                ) : (
                <div>
                    <div className="text-center m-5">
                        <h2>Soal ke - {currentQuestion + 1} dari {Questions.length}</h2>
                    </div>
                    <div class="row">
                        <div className="col-sm-4">
                            <img src={Questions[currentQuestion].imageQuestion} className="image-question" alt="" />
                        </div>
                        <div className="col-sm-8">
                            <p className="fs-2">Apakah nama benda yang ada di samping ?</p>
                            {Questions[currentQuestion].answerOptions.map((answerOption,index) => (
                                <button
                                    onClick={() => this.handleAnswerButtonClick(answerOption.isCorrect)}
                                    key={index}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default Soal;