import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const {dispatch, getState, subscribe} = createStore(reducer);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("rst").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

const update = () => {
    document.getElementById("counter").textContent = getState();
};

subscribe(update);
