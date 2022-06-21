import React from 'react'
import '../css/home.css'
import profile from '../img/profile.png'
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();

    const onPredict = () => {
        navigate("/groupsStage")

    }
    return (
        <div className="container">

            <div className="wrapper-container">
                <div className="content">
                    <div className="info">
                        <h3>FIFA WORLD CUP Qatar 2022. THE DREAM OF EVERY FOOTBALL FAN</h3>
                        <a href="https://www.qatar2022.qa/en/home" target="_blank"><button className="btn">Visit The Website</button></a>
                    </div>
                    <div className ="info">
                        <h3>PREDICT YOUR FIFA WORLD CUP Qatar 2022 WINNER AND QUALIFIERS</h3>
                        <button className="btn" onClick={onPredict}>Start Prediction Now</button>
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Home
