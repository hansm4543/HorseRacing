
export const HORSERACE_ADD = "HORSERACE_ADD"
export const HORSERACE_REMOVE = "HORSERACE_REMOVE"
export const LOAD_UPDATE = "LOAD_UPDATE"
export const HORSERACES_UPDATE = "HORSERACES_UPDATE"


export const removeHorseRace = orderNo =>({
    type: "HORSERACE_REMOVE",
    payload: orderNo
})

export const updateHorseRaces = array =>({
    type: "HORSERACES_UPDATE",
    payload: array
})
export const updateLoad = array =>({
    type: "LOAD_UPDATE",
    payload: array
})

export const addHorseRace= array =>({
    type: "HORSERACE_ADD",
    payload: array
})