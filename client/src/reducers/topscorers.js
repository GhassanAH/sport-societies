import { topscorers } from "../actions/types"



const league = (state = null, action) => {
    switch(action.type){
        case topscorers:
            return action.payload || false
        default:
            return state
    }
}

export default league