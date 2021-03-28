import {applyMiddleware, combineReducers, createStore} from "redux";
import statisticsReducer from "./statistics-reducer";
import dashboardReducer from "./dashboard-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    statistics: statisticsReducer,
    dashboard: dashboardReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;