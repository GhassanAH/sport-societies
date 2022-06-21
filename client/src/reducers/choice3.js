import { ROUND8 } from "../actions/types"

const choice3 = (state = null, action) => {
    switch(action.type){
        case ROUND8:
            return action.payload || false
        default:
 
            return state
    }
}

export default choice3