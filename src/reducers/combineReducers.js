import { combineReducers  } from "redux";
import  commentReducer   from "../reducers";

const reducers = combineReducers({
        comment : commentReducer
    }) 


export default reducers;