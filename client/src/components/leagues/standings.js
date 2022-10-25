import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getStandings} from "../../actions"
import "../../css/standings.css"
import Available from './available'


const Standings = ({id, standing, getStanding}) => {
    const [standings, setStandings] = useState([])
    const groupName = ["A", "B", "C","D","E","F","G", "H"]

    useEffect(() => {
        getStanding(id)
    },[id])

    useEffect(() => {
        if(standing){
            if(standing.message === `successfully ${id} standings fetched`){
                console.log(standing.data)
                setStandings(standing.data)
            }
        }
    },[standing])

    const classifyRank = (rank) => {
        if(rank){
            if(rank.includes("Promotion - Champions League (Group Stage)")){
                return "st-col1 cml"
            }else if(rank.includes("Relegation")){
                return "st-col1 cms"
            }else{
                return "st-col1"
    
            }
        }else{
            return "st-col1"
        }
    }
    const getStat = (s, index) =>{
        if(s === "W"){
            return (<div className="win" key={index}>W</div>);
        }else if(s === "D"){
            return (<div className="draw" key={index}>D</div>);
        }else{
            return (<div className="lost" key={index}>L</div>);
        }
    }
    // useEffect(() => {
    //     console.log("standings => ",standings)
    // },[standings])




    return (
        <div className="con-st">
            {id !== "2" &&  id !== "1" &&           
            <div className="st-con">
                    <div className="st-row">
                        <div className="st-col1 he">#</div>
                        <div className="st-col2 he">Team</div>
                        <div className="st-col1 he">GD</div>
                        <div className="st-col1 he">PL</div>
                        <div className="st-col1 he">W</div>
                        <div className="st-col1 he">D</div>
                        <div className="st-col1 he">L</div>
                        <div className="st-col1 he">GF</div>
                        <div className="st-col1 he">GA</div>
                        <div className="st-col1 he">PTS</div>
                        <div className="st-col3 he">LFG</div>
                    </div>
                {standings[0] &&
                standings[0].map((teams, index) => {
                    return (
                        <div className="st-row" key={index}>
                            <div className={classifyRank(teams.description)}>{teams.rank} </div>
                            <div className="st-col2"><img className="st-img" src={teams.team.logo}/> {teams.team.name}</div>
                            <div className="st-col1">{teams.goalsDiff} </div>
                            <div className="st-col1">{teams.all.played} </div>
                            <div className="st-col1">{teams.all.win} </div>
                            <div className="st-col1">{teams.all.draw} </div>
                            <div className="st-col1">{teams.all.lose} </div>
                            <div className="st-col1">{teams.all.goals.for} </div>
                            <div className="st-col1">{teams.all.goals.against} </div>
                            <div className="st-col1">{teams.points} </div>
                            <div className="st-col3">
                                {teams.form.split("").reverse().map((s, index) => {
                                    return getStat(s, index);
                                        
                                    
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>}
            {standings.length === 8 && 
                <div className="st-con">
                    <div className="st-teams">
                        {standings.map((groups, index) => {
                            return <div className="st-group">
                                    <h4 className="st-he3">Group {groupName[index]}</h4>
                                    <div className="st-team st-head">
                                        <div className="st-rk">#</div>
                                        <div className="st-grid-img"></div>
                                        <div className="st-g-name">Name</div>
                                        <div className="st-p">P</div>
                                        <div className="st-p">GD</div>
                                        <div className="st-p">P</div>
                                        <div className="st-p">W</div>
                                        <div className="st-p">D</div>
                                        <div className="st-p">L</div>
                                    </div>
                                    {groups.map((teams) => {
                                        return  <div className="st-team">
                                                    <div className="st-rk">{teams.rank}</div>
                                                    <img className="st-grid-img" src={teams.team.logo}/>
                                                    <div className="st-g-name">{teams.team.name}</div>
                                                    <div className="st-p">{teams.points}</div>
                                                    <div className="st-p">{teams.goalsDiff}</div>
                                                    <div className="st-p">{teams.all.played}</div>
                                                    <div className="st-p">{teams.all.win}</div>
                                                    <div className="st-p">{teams.all.draw}</div>
                                                    <div className="st-p">{teams.all.lose}</div>
                                                </div>
                                        
                                    })}
                                    </div>
                        })}
                    </div>
                </div>
            }
            {!standings &&
                <Available/>

            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        standing: state.standing
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getStanding: (id) => dispatch(getStandings(id)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Standings)
