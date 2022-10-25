import React from 'react'
import './css/landing.css'
import {Carousel,Card,Row,Col,Container,Button} from 'react-bootstrap'
import fifa from "./img/cm-flag.gif";
import uefa from "./img/uefa.jpg";
import premier from "./img/premier.jpg";
import lal from "./img/lal.jpg";
import ser from "./img/ser.png";
import lig from "./img/Lig.png";
import bon from "./img/bon.png";
import lega from "./img/lega.png";
import hliga from "./img/hliga.png";
import draw from "./img/draw.jpg";
import fifaLogo from "./img/fifa-qatar-2022-logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'






const Landing = () => {
    const { t } = useTranslation();

    return (
        <div className="main-l">
            <Carousel>
                    <Carousel.Item >
                        <img
                            className="c-item"
                            width="800px"
                            height="400px"
                            src={fifa}
                            alt="First slide"
                            
                            
                        />
                        <Carousel.Caption>
                            <h3>START COMUNICATION WITH CHATFAT</h3>
                            <p>Get your first account to comunicate with your friends.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="c-item"
                            width="800px"
                            height="400px"
                            src={fifa}
                            alt="Second slide"
                        />
                
                        <Carousel.Caption >
                            <h3>BE FAT AND CHAT NOW</h3>
                            <p>Add your friends' id and contact with them.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="c-item"
                            width="800px"
                            height="400px"
                            src={fifa}
                            alt="Third slide"
                        />
                
                        <Carousel.Caption >
                            <h3>CHAT WITH YOUR TRAINER, AND DO NOT BE FAT</h3>
                            <p>Send positive messages to your contacts, learn any language, speak your language, and always share love.</p>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
            </Carousel>
            <Container className="justify- mt-5 mb-5" >
                <h2 className="he2">{t("World Cup Qatar 2022")}</h2>
                <Row className="rowl">
                    <Col sm>
                        <Card className="cardl">
                            <Card.Img variant="top" src={fifaLogo} className="img-l"/>
                            <Card.Body>
                                <Card.Title>{t("FIFA World")}</Card.Title>
                                <NavLink to="/league/worldcup"><Button variant="primary">{t("Click here")}</Button></NavLink>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card className="cardl">
                            <Card.Img variant="top" src={draw} className="img-l"/>
                            <Card.Body>
                                <Card.Title>{t('FIFA')}</Card.Title>
                                <NavLink to="/worldcupHome"><Button variant="primary">{t("Click here")}</Button></NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                </Row>
                <h2 className="he2">{t("European Leagues")}</h2>
                <Row className="rowl">
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={uefa} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("UEFA")}</Card.Title>
                            <NavLink to="/league/Champions"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                   
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={premier} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t('Premier')}</Card.Title>
                            <NavLink to="/league/Premier"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={lal} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("LaLiga")}</Card.Title>
                            <NavLink to="/league/LaLiga"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={ser} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("Serie")}</Card.Title>
                            <NavLink to="/league/Serie"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <Row className="rowl">
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={lig} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("Ligue")}</Card.Title>
                            <NavLink to="/league/Ligue"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                   
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={bon} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("Bundesliga")}</Card.Title>
                            <NavLink to="/league/Bundesliga"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={lega} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("Liga")}</Card.Title>
                            <NavLink to="/league/Liga"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card className="cardl">
                        <Card.Img variant="top" src={hliga} className="img-l"/>
                        <Card.Body>
                            <Card.Title>{t("Eredivisie")}</Card.Title>
                            <NavLink to="/league/Eredivisie"><Button variant="primary">{t("Click here")}</Button></NavLink>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>




      </Container>
        </div>
    )
}

export default Landing
