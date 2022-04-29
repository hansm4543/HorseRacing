
export const HORSERACE_ADD = "HORSERACE_ADD"
export const HORSERACE_REMOVE = "HORSERACE_REMOVE"
export const LOAD_UPDATE = "LOAD_UPDATE"
export const HORSERACES_UPDATE = "HORSERACES_UPDATE"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

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

export const loginUser = data =>({
    type: USER_LOGIN,
    payload: data
})

export const logoutUser = () =>({
    type: USER_LOGOUT
})