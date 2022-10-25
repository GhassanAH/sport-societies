import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getNextMatches} from "../../actions"
import "../../css/nextMatch.css"
import { useTranslation } from 'react-i18next'


const NextMatch = ({getNextMatche, nextmatch, id}) => {

    const [nextMatch, setNextMatch] = useState([])
    const { t } = useTranslation();


    useEffect(() => {
        getNextMatche(id)
    },[id])

    useEffect(() => {
        if(nextmatch){
            if(nextmatch.message === `successfully ${id} nextMatches fetched`){
                setNextMatch(nextmatch.data)
            }
        }
    },[nextmatch])

    const formatDate1 = (date) => {
        let newDate = Date.parse(date);
        const theDate = new Date(newDate);
        return theDate.getDate() + "/" + (theDate.getMonth() +1) + "/" + theDate.getFullYear() 
    }
    const formatDate2 = (date) => {
        let newDate = Date.parse(date);
        const theDate = new Date(newDate);
        return fixDate(theDate.getHours()) + ":" + fixDate(theDate.getMinutes())
    }
    const fixDate = (num) => {
        if(num >= 0 && num <= 9){
            return "0"+num;
        }else{
            return num
        }
    }

    return (
        <div className="nm-con">
            <div className="nm-row">
                <div className="nm-col">
                    <div className="nm-sec">
                        <div className="nm-team nm-he">{t("Home")}</div>
                        <div className="nm-details">
                            <div className="nm-he">{t("Match Details")}</div>
                        </div>
                        <div className="nm-team nm-he">{t("Away")}</div>
                    </div>
                    {nextMatch && nextMatch.map((match,index) => {
                        return(
                            <div className="nm-sec">
                                <div className="nm-team">
                                    <img className="nm-img" src={match.teams.home.logo}/>
                                    {match.teams.home.name}

                                </div>
                                <div className="nm-details">
                                    <div>{formatDate2(match.fixture.date)}</div>
                                    <div>{formatDate1(match.fixture.date)}</div>
                                    <div>{match.fixture.venue.name}</div>
                                    <div>{match.fixture.venue.city}</div>
                                    <div>{match.fixture.referee}</div>
                                </div>
                                <div className="nm-team">
                                    <img className="nm-img" src={match.teams.away.logo}/>
                                    {match.teams.away.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nextmatch: state.nextmatch
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        getNextMatche: (id) => dispatch(getNextMatches(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NextMatch)
