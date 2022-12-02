import {INCREMENT,DECREMENT, RESET,RANDOMINCREMENT,RANDOMDECREMENT} from "../"

const initialState = {
    count: 0,
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const reducer = (state = initialState, action) => {

        // if(initialState){
        //     initialState = {
        //         count: 0,
        //     }
        // }

        switch (action.type) {
            case INCREMENT: 
                console.log(state.count + 1);
                return {
                    count: state.count + 1,
                };

            case DECREMENT: 
                console.log(state.count - 1);
                return {
                    count: state.count - 1,
                };

            case RESET: 
                console.log(0);
                return {
                    count: 0,
                };

            case RANDOMINCREMENT: 
                console.log(state.count +  getRandomInt(101));
                return {
                    count: state.count +  getRandomInt(101),
                };

            case RANDOMDECREMENT: 
                console.log(state.count -  getRandomInt(101));
                return {
                    count: state.count -  getRandomInt(101),
                };
            
            default:
                return state;
        }
    };

    export default reducer;