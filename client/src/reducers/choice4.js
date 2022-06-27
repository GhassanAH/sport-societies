import { ROUND4 } from "../actions/types"

const choice4 = (state = JSON.parse(localStorage.getItem("round4")), action) => {
    switch(action.type){
        case ROUND4:
            return action.payload || false
        default:
            return state
    }
}

export default choice4