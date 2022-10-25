import React, { useState, useEffect } from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import { useParams } from 'react-router'
import uefa from "../../img/uefa.jpg";
import premier from "../../img/premier.jpg";
import lal from "../../img/lal.jpg";
import ser from "../../img/ser.png";
import lig from "../../img/Lig.png";
import bon from "../../img/bon.png";
import lega from "../../img/lega.png";
import hliga from "../../img/hliga.png";
import fifaLogo from "../../img/fifa-qatar-2022-logo.png";
import '../../css/league.css'
import Standings from './standings';
import Topsocrers from './topsocrers';
import NextMatch from './nextMatch';
import { useTranslation } from 'react-i18next'
import Available from './available';




const League = () => {
    const [key, setKey] = useState('Standing');
    const {id} = useParams("id");
    const [leagueNumber, setLeagueNumber] = useState("39");
    const [image, setImage] = useState(null)
    const { t } = useTranslation();


    useEffect(() => {
        getLeague(id);
    }, [id])

    const getLeague = (id) => {
        switch(id){
            case "Premier":
                setImage(premier);
                setLeagueNumber("39")
                return;
            case "Champions":
                setImage(uefa);
                setLeagueNumber("2")
                return;
            case "LaLiga":
                setImage(lal);
                setLeagueNumber("140")
                return;
            case "Serie":
                setImage(ser);
                setLeagueNumber("135")
                return;
            case "Ligue":
                setImage(lig);
                setLeagueNumber("61")
                return;
            case "Bundesliga":
                setImage(bon);
                setLeagueNumber("78")
                return;
            case "Liga":
                setImage(lega);
                setLeagueNumber("94")
                return;
            case "Eredivisie":
                setImage(hliga);
                setLeagueNumber("88")
                return;
            case "worldcup":
                setImage(fifaLogo);
                setLeagueNumber("1")
                return;

        }
    }


    return (
        <div className="le-con">
            {image && <img src={image} className="img-le"/>}
             <Tabs
                id="Standing"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                fill
            >
                <Tab eventKey="Standing" title={t('Standing')}>
                    <Standings id={leagueNumber} />
                </Tab>
                <Tab eventKey="Match" title={t('Next')}>
                    <NextMatch id={leagueNumber} />
                </Tab>
                <Tab eventKey="Scorers" title={t('Top')}>
                    <Topsocrers id={leagueNumber} />
                </Tab>
                <Tab eventKey="News" title={t('News')}>
                    <Available/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default League
