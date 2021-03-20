import React from "react";
import ReactDOM from "react-dom";

import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./counter";

const {dispatch, getState, subscribe} = createStore(reducer);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


const update = () => {
    ReactDOM.render(<React.StrictMode>
        <Counter counter={getState()} inc={inc} dec={dec} rnd={rnd(() => {
            const value = Math.floor(Math.random() * 10);
            rnd(value);
        })}/>
    </React.StrictMode>, document.getElementById("root"));
};

update();

subscribe(update);


