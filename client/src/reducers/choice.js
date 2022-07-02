import { SAVE_GROUPS } from "../actions/types"
import data from "../data/columns"



const choice = (state = data, action) => {
    switch(action.type){
        case SAVE_GROUPS:
            return action.payload || false
        default:
            return state
    }
}

export default choice