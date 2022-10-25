import { standings} from "../actions/types"

const standing = (state = null, action) => {
    switch(action.type){
        case standings:
            return action.payload || false
        default:
            return state
    }
}

export default standing