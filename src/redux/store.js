import { legacy_createStore as createStore } from "redux";
import {countReducer} from "./reducer"
import userReducer from "./userReducer";
import { combineReducers , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({

    count:countReducer,
    users:userReducer
})
 const store = createStore(rootReducer , applyMiddleware(thunk))

 export default store;

