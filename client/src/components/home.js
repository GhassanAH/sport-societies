import React from 'react'
import '../css/home.css'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    let navigate = useNavigate();

    const onPredict = () => {
        navigate("/groupsStage")

    }
    return (
        <>
        <Helmet>
                <title>Sport Societies || World of Sports</title>
                <meta name="description" content="Sport Societies is a sport paradise. It's where you find all sort of sport societies. It's the place where to see the match from different perspective, It's the world of football and other sports"/>
                <meta name="keywords" content="Sport Societies, sport societies, world cup prediction, qatar2022, Round of 16, Quarterfinal, Semifinals, Groups stage, World cup Qatar 2022, prediction"/>
                <link rel="canonical" href="/"/>
        </Helmet>
        <div className="container">

            <div className="wrapper-container">
                <div className="content">
                    <div className="info">
                        <h3>FIFA WORLD CUP Qatar 2022. THE DREAM OF EVERY FOOTBALL FAN</h3>
                        <a href="https://www.qatar2022.qa/en/home" target="_blank" rel="noreferrer"><button className="btn">Visit The Website</button></a>
                    </div>
                    <div className ="info">
                        <h3>PREDICT YOUR FIFA WORLD CUP Qatar 2022 WINNER AND QUALIFIERS</h3>
                        <button className="btn" onClick={onPredict}>Start Prediction Now</button>
                    </div>
                    

                </div>
            </div>
            
        </div>
        </>
    )
}

export default Home
