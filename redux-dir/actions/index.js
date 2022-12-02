import {INCREMENT,DECREMENT, RESET,RANDOMINCREMENT,RANDOMDECREMENT} from "../";

const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};

const reset = () => {
    return {
        type: RESET,
    };
};

const randomincrement = () => {
    return {
        type: RANDOMINCREMENT,
    };
};

const randomdecrement = () => {
    return {
        type: RANDOMDECREMENT,
    };
};

export {increment, decrement, reset, randomincrement, randomdecrement};