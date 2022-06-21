import { ROUND16 } from "../actions/types"

const choice2 = (state = null, action) => {
    switch(action.type){
        case ROUND16:
            return action.payload || false
        default:

            return state
    }
}

export default choice2