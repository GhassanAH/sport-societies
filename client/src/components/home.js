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
                <title>World Cup Qatar 2022 Predictions</title>
                <meta name="description" content="Sport Societies || World Cup Qatar 2022 Prediction"/>
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
