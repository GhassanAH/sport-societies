import React from 'react'
import '../css/home.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="title">
                  <h2>Sport Societies</h2>
                  <h3>Thank You For Visiting Sport Societies Website</h3>
                </div>
                <div className="navs">
                    <h2>Report an issue</h2>
                    <div className="nav">
                        <a href="mailto:sportsocieties@gmail.com" className="link"><h3>sportsocieties@gmail.com</h3></a>
                    </div>
  
                </div>
                <div className="navs">
                    <h2>Contact us</h2>
                    <div className="nav">
                        <a href="mailto:sportsocieties@gmail.com" className="link"><h3>sportsocieties@gmail.com</h3></a>
                    </div>
  
                </div>

            </div>
        </div>
    )
}

export default Footer
