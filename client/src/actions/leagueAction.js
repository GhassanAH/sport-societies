import axios from "axios"
import ls from "local-storage"
import {standings, topscorers, nextmatches} from "./types"

export const getStandings =  (id) => async dispatch => {
    const res = await axios.get(`/api/standing/${id}`)
    dispatch({type:standings, payload:res.data})
    
}
export const getTopScorers =  (id) => async dispatch => {
    const res = await axios.get(`/api/topscorers/${id}`)
    dispatch({type:topscorers, payload:res.data})

}
export const getNextMatches =  (id) => async dispatch => {
    const res = await axios.get(`/api/nextMatches/${id}`)
    dispatch({type:nextmatches, payload:res.data})

}

