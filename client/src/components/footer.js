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
                        <div className="soc">
                        <a href="mailto:sportsocieties@gmail.com" className="link"><SocialIcon network="email" style={{ height: 25, width: 25, marginRight:5 }} /><h3>sportsocieties@gmail.com</h3></a>
                        <a href="https://www.instagram.com/sportsocieties/" className="link" target="_blank" rel="noreferrer"><SocialIcon network="instagram"  style={{ height: 25, width: 25 , marginRight:5}} /><h3>instagram</h3></a>
                        <a href="https://twitter.com/SocietiesSport/" className="link" target="_blank" rel="noreferrer"><SocialIcon network="twitter" style={{ height: 25, width: 25, marginRight:5 }} /><h3>Twitter</h3></a>

                        </div>

                    </div>
                    <div className="nav2">
                        <h2>About us</h2>
                        <div className="soc">
                        <a href="/aboutpage1" className="link"><SocialIcon network="email" style={{ height: 25, width: 25, marginRight:5 }} /><h3>Blog</h3></a>
                        <a href="https://www.youtube.com/channel/UC1IYKQCHHgwaVT-7ov44yxA/videos" className="link" target="_blank" rel="noreferrer"><SocialIcon network="youtube" style={{ height: 25, width: 25, marginRight:5 }} /><h3>YouTube</h3></a>
                        <a href="https://www.facebook.com/groups/414100234014071/" className="link" target="_blank" rel="noreferrer"><SocialIcon network="facebook" style={{ height: 25, width: 25, marginRight:5 }} /><h3>Facebook group</h3></a>
                        </div>

                    </div>
  
                </div>

            </div>
        </div>
    )
}

export default Footer
