import {HORSERACE_ADD, HORSERACE_REMOVE, LOAD_UPDATE, HORSERACES_UPDATE} from "./actions";

const horseRaceReducer = (state, action) => {
    switch(action.type){
        case HORSERACE_ADD:
            return{
                ...state,
                //concat liida juurde
                data: state.data.concat(action.payload)
            };
        case HORSERACE_REMOVE:
            return{
                ...state,
                data: state.data.filter(post => post.orderNo !== action.payload)
            };
        case HORSERACES_UPDATE:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
const loadReducer = (state, action) => {
    switch(action.type){
        case LOAD_UPDATE:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}


export {horseRaceReducer, loadReducer};