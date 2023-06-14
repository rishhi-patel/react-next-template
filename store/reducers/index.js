import { combineReducers } from "redux"
import counterReducer from "./counter"

const reducer = combineReducers({ count: counterReducer })

export default reducer
