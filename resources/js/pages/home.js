import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import "../css/style.css";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
            username : "",
            email : "",
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
            email : "",
            username : ""
        };
        
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
            isLoggedIn : false,
            email : "",
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
                <div class="container d-flex align-items-center">
                    <div class="center-component">
                        <img src={"http://localhost:8000/images/logo.png"} alt="" />
                        <p>Hai {username},<span id="salam"></span></p>
                        <a href="/list-materi" className="option-menu" id="belajar">Belajar Dulu</a>
                        <a href="/pertanyaan" className="option-menu" id="mulai">Mulai Kuis</a>
                        <a href="/skor-terakhir" className="option-menu" id="lihat-skor">Lihat Skor terakhir kamu</a>
                        <a href="/" className="option-menu" id="keluar">Keluar</a>
                    </div>
                </div>
                <button onClick={this.Logout}>Logout</button>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;