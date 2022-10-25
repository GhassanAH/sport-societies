import { combineReducers } from "redux";
import choice from "./choice";
import choice2 from "./choice2";
import choice3 from "./choice3";
import choice4 from "./choice4";
import choice5 from "./choice5";
import choice6 from "./choice6";
import topscorers from "./topscorers";
import standing from "./standing";
import nextmatch from "./nextMatch";
export default combineReducers({
    data:choice,
    data2:choice2,
    data3:choice3,
    data4:choice4,
    data5:choice5,
    data6:choice6,
    topscorers:topscorers,
    standing:standing,
    nextmatch:nextmatch,


})