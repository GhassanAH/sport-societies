import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getTopScorers} from "../../actions"
import "../../css/topscorers.css"
import Available from './available'


const Topsocrers = ({id, getTopScorer, topscorers}) => {
    const [topScorers, setTopScorers] = useState([])

    useEffect(() => {
        getTopScorer(id)
    },[id])

    useEffect(() => {
        if(topscorers){
            if(topscorers.message === `successfully ${id} topscorers fetched`){
                setTopScorers(topscorers.data)
            }
        }
    },[topscorers])

    return (
        <>
            { topScorers.length > 0 && <div className="tp-con">
                    <div className="tp-col">
                            <div className="tp-rank tp-he">#</div>
                            <div className="tp-img tp-he"></div>
                            <div className="tp-name tp-he">Name</div>
                            <div className="tp-img-tm tp-he"></div>
                            <div className="tp-name tp-he">Team</div>
                            <div className="tp-goals tp-he">Goals</div>
                            <div className="tp-goals tp-he">SP</div>
                            <div className="tp-goals tp-he">MP</div>
                            <div className="tp-goals tp-he">DF</div>
                            <div className="tp-goals tp-he">CF</div>
                    </div>
                {topScorers && topScorers.map((players,index) => {
                    return(
                        <div className="tp-col" key={index}>
                            <div className="tp-rank">{index+1}</div>
                            <img className="tp-img"  src={players.player.photo}/>
                            <div className="tp-name">{players.player.name}</div>
                            <img className="tp-img-tm"  src={players.statistics[0].team.logo}/>
                            <div className="tp-name">{players.statistics[0].team.name}</div>
                            <div className="tp-goals">{players.statistics[0].goals.total}</div>
                            <div className="tp-goals">{players.statistics[0].penalty.scored}</div>
                            <div className="tp-goals">{players.statistics[0].penalty.missed}</div>
                            <div className="tp-goals">{players.statistics[0].fouls.drawn === null? 0:players.statistics[0].fouls.drawn}</div>
                            <div className="tp-goals">{players.statistics[0].fouls.committed === null? 0:players.statistics[0].fouls.committed}</div>
                        </div>
                    )
                })}
                
            </div>}
            {topScorers.length === 0 && <Available/>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        topscorers: state.topscorers
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getTopScorer: (id) => dispatch(getTopScorers(id)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Topsocrers)
