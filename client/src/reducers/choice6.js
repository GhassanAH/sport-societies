import { WINNER } from "../actions/types"

const choice6 = (state = JSON.parse(localStorage.getItem("winner")), action) => {
    switch(action.type){
        case WINNER:
            return action.payload || false
        default:
            return state
    }
}

export default choice6