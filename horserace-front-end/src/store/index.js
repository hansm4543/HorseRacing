import { createContext, useReducer, useEffect, useState } from "react";
import { horseRaceReducer, loadReducer } from "./reducer";
import combineReducers from "react-combine-reducers";

const initalHorseRaces = {
    data: []

}

const initalLoad = {
    data: [true]

}

const [combinedReducer, initialState] = combineReducers({
    horseRaces: [horseRaceReducer, initalHorseRaces],
    load: [loadReducer, initalLoad],

})

export const Context = createContext(initialState)

function Store({children}){
    const [state, dispatch] = useReducer(combinedReducer, initialState)

    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
}

export default Store