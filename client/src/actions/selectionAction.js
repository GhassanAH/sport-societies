import {SAVE_GROUPS, ROUND16, ROUND4, ROUND8, FINAL, WINNER, result16, result4, result8, resultf} from './types'

export const saveGrops = (groups) => dispatch => {
    dispatch({type:SAVE_GROUPS, payload:groups})
}
export const save16r = (groups) => dispatch => {
    dispatch({type:result16, payload:groups})
}
export const save8r = (groups) => dispatch => {
    dispatch({type:result8, payload:groups})
}
export const save4r = (groups) => dispatch => {
    dispatch({type:result4, payload:groups})
}
export const savefinalr = (groups) => dispatch => {
    dispatch({type:resultf, payload:groups})
}
export const save16 = (groups) => dispatch => {
    dispatch({type:ROUND16, payload:groups})
}
export const save8 = (groups) => dispatch => {
    dispatch({type:ROUND8, payload:groups})
}
export const save4 = (groups) => dispatch => {
    dispatch({type:ROUND4, payload:groups})
}
export const final = (groups) => dispatch => {
    dispatch({type:FINAL, payload:groups})
}
export const saveWinner = (groups) => dispatch => {
    dispatch({type:WINNER, payload:groups})
}