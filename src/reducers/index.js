import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import binanceDataReducer from "../containers/AGGrid/store/reducers"


export default function createReducer(history, injectReducers = {}) {
    const rootReducer = combineReducers({
        aggrid: binanceDataReducer,
        router: connectRouter(history),
        ...injectReducers
    })

    return rootReducer
}