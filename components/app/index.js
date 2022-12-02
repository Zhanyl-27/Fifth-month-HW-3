import React from "react";
import {connect, useSelector} from "react-redux";
import {increment, decrement, reset, randomincrement, randomdecrement} from "../../redux-dir";

const App = ({number, inc, dec, reset, rinc, rdec}) => {
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={rinc}>+RND</button>
            <button onClick={rdec}>-RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        number: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(increment()),
        dec: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
        rinc: () => dispatch(randomincrement()),
        rdec: () => dispatch(randomdecrement()),
    };  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);