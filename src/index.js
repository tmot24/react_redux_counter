import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import {inc, dec, rnd} from "./actions";

const {dispatch, getState, subscribe} = createStore(reducer);

const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById("inc").addEventListener("click", incDispatch);
document.getElementById("dec").addEventListener("click", decDispatch);
document.getElementById("rst").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10)
    rndDispatch(value);
});

const update = () => {
    document.getElementById("counter").textContent = getState();
};

subscribe(update);
