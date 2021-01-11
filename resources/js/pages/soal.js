import React,{Component} from "react";
import Questions from "../data/soal.json";

class Soal extends Component{
    constructor(){
        super();
        this.state = {
            Data : [],
            currentQuestion : 0,
            Score : 0,
            showScore : false
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
        const nilai = Score/10 * 100;
        let state = "";
        if (nilai<70){
            state = "kamu perlu terus belajar";
        }
        else{
            state = "kamu cerdas banget";
        }

        return (
            <div className="">
                {showScore ? (
                    <div className="">
                        <p>jawaban benar anda yaitu {Score} dari {Questions.length} </p>
                        <p>{nilai}</p>
                        <p>{state}</p>
                    </div>
                ) : (
                <div>
                    <div className="">
                        <img src={Questions[currentQuestion].imageQuestion} alt="" />
                        <p>Apakah nama benda yang ada di atas ?</p>
                    </div>
                    <div className="">
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
                )}
            </div>
        );
    }
}

export default Soal;