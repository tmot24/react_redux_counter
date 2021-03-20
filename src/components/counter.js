import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="counter-block content">
                        {counter}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="primitive-actions">
                        <div className="plus-block" onClick={inc}>
                            <img src={"img/Plus.png"} alt={"plus"}/>
                        </div>
                        <div className="minus-block" onClick={dec}>
                            <img src={"img/Minus.png"} alt="minus"/>
                        </div>
                        <div className="reset-block" onClick={rnd}>
                            <img src={"img/Reset.png"} alt="reset"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(Counter);