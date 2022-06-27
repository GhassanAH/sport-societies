import React from 'react'
import '../css/home.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="title">
                  <h2>Sport Societies</h2>
                  <h4>Thank You For Visiting Sport Societies Website</h4>
                </div>
                <div className="navs">
                    <h2>Report an issue</h2>
                    <div className="nav">
                        <a href="mailto:sportsocieties@gmail.com" className="link"><h4>sportsocieties@gmail.com</h4></a>
                    </div>
  
                </div>
                <div className="navs">
                    <h2>Contact us</h2>
                    <div className="nav">
                        <a href="mailto:sportsocieties@gmail.com" className="link"><h4>sportsocieties@gmail.com</h4></a>
                    </div>
  
                </div>

            </div>
        </div>
    )
}

export default Footer
