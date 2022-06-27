import { SAVE_GROUPS } from "../actions/types"

const choice = (state = JSON.parse(localStorage.getItem("groups")), action) => {
    switch(action.type){
        case SAVE_GROUPS:
            return action.payload || false
        default:
            return state
    }
}

export default choice