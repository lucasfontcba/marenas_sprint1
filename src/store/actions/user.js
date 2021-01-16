import { SETLOGIN_USER } from "./types"

export const setLogin = (data) => ({
    type: SETLOGIN_USER,
    data: data
})
