import './index.css';
import store from "./State/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

/*let renderEntireTree = (state) => {


}*/

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

/*renderEntireTree(store.getState());
store.subscribe(()  => {
    let state = store.getState();
    renderEntireTree(state);
});*/

