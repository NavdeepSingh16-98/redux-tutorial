const initialsState = {count:0};


export const countReducer = (state = initialsState ,action) =>{



    switch(action.type){

        case "INCREMENT":
            return {count:state.count + 1};
        case "DECREMENT":
            return {count:state.count - 1};
        default:
            return state;
    }
}

export default countReducer;