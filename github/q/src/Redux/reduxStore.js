import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    user: userReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
