import { ROUND16 } from "../actions/types"

const choice2 = (state = JSON.parse(localStorage.getItem("round16")), action) => {
    switch(action.type){
        case ROUND16:
            return action.payload || false
        default:

            return state
    }
}

export default choice2