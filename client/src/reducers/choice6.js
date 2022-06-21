import { WINNER } from "../actions/types"

const choice6 = (state = null, action) => {
    switch(action.type){
        case WINNER:
            return action.payload || false
        default:
            return state
    }
}

export default choice6