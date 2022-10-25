import { nextmatches} from "../actions/types"

const nextmatch = (state = null, action) => {
    switch(action.type){
        case nextmatches:
            return action.payload || false
        default:
            return state
    }
}

export default nextmatch