import { ROUND4 } from "../actions/types"

const choice4 = (state = null, action) => {
    switch(action.type){
        case ROUND4:
            return action.payload || false
        default:
            return state
    }
}

export default choice4