import { SETLANG_APP, SETSIGNINNAV_APP } from "./types"

export const setLang = (data) => ({
    type: SETLANG_APP,
    data: data
})

export const setSignInNav = (data) => ({
    type: SETSIGNINNAV_APP,
    data: data
})