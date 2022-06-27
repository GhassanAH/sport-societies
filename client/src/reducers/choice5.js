import { FINAL } from "../actions/types"

const choice5 = (state = JSON.parse(localStorage.getItem("final")), action) => {
    switch(action.type){
        case FINAL:
            return action.payload || false
        default:
            return state
    }
}

export default choice5