import React from 'react'
import '../css/home.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="title">
                  <h2>Sport Societies</h2>
                  <h3>Thank You For Visiting Sport Societies Website</h3>
                </div>
                <div className="navs">
                    <div className="nav2">
                        <h2>Contact us</h2>
                        <a href="mailto:sportsocieties@gmail.com" className="link"><h3>sportsocieties@gmail.com</h3></a>
                        <a href="https://www.instagram.com/sportsocieties/" className="link" target="_blank"><SocialIcon network="instagram"  style={{ height: 45, width: 45 , marginRight:5}} /><h3>instagram</h3></a>
                        <a href="https://twitter.com/SocietiesSport/" className="link" target="_blank"><SocialIcon network="twitter" style={{ height: 45, width: 45, marginRight:5 }} /><h3>Twitter</h3></a>

                    </div>
                    <div className="nav2">
                        <h2>About us</h2>
                        <a href="/aboutpage1" className="link"><h3>About The Website</h3></a>

                    </div>
  
                </div>

            </div>
        </div>
    )
}

export default Footer
