import React from "react";

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
                            <img src={"img/Plus.png"}/>
                        </div>
                        <div className="minus-block" onClick={() => dec}>
                            <img src={"img/Minus.png"} alt="minus"/>
                        </div>
                        <div className="reset-block" onClick={() => rnd}>
                            <img src={"img/Reset.png"} alt="reset"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;