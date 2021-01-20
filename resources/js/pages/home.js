import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../asset/img/logo.png";
import "../css/style.css";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
            username : "",
            redirect : false
        }
    }

    componentWillMount(){
        let state = localStorage["appState"];

        if (state){
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn : AppState.isLoggedIn,
                username : AppState.username
            });
        }
    }

    componentDidMount(){
        let time = new Date();
        let hours = time.getHours();

        if(hours<4){
            document.getElementById("salam").innerHTML = "Selamat Malam";
        }
        else if(hours<11){
            document.getElementById("salam").innerHTML = "Selamat Pagi";
        }
        else if(hours<15){
            document.getElementById("salam").innerHTML = "Selamat Siang";
        }
        else if(hours<19){
            document.getElementById("salam").innerHTML = "Selamat Sore";
        }
        else{
            document.getElementById("salam").innerHTML = "Selamat Malam";
        }

    }

    Logout = () => {
        let appState = {
            isLoggedIn : false,
            username : ""
        };
        let userScore = {
            nilai : 0,
            true : 0,
            false : 0
        }
        
        localStorage["userScore"] = JSON.stringify(userScore);
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
            isLoggedIn : false,
            username : "",
            redirect : true
        });
    }

    render(){
        const {username,redirect} = this.state;

        if (redirect){
            return <Redirect to="/" />;
        }

        return (
            <React.Fragment>
                    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center home">
                        <img src='/logo.png' alt="" />
                        <p>Hai {username},<span id="salam"></span></p>
                        <a href="/list-materi" className="option-menu" id="belajar">Belajar Dulu</a>
                        <a href="/pertanyaan" className="option-menu" id="mulai">Mulai Kuis</a>
                        <a href="/skor-terakhir" className="option-menu" id="lihat-skor">Lihat Skor terakhir kamu</a>
                        <button onClick={this.Logout} className="option-menu" id="keluar">Ganti Nama Kamu</button>
                    </div>
            </React.Fragment>
        );
    }
}

export default Home;