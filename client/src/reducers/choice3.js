import { ROUND8 } from "../actions/types"

const choice3 = (state = JSON.parse(localStorage.getItem("round8")), action) => {
    switch(action.type){
        case ROUND8:
            return action.payload || false
        default:
 
            return state
    }
}

export default choice3