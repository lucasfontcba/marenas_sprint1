import { SETLANG_APP, SETSIGNINNAV_APP } from "../actions/types"

const initialState = {

    signInNav: false,
    lang: 0
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETLANG_APP:
            return {
                ...state,
                lang: action.data
            }
        case SETSIGNINNAV_APP:
            return {
                ...state,
                signInNav: action.data
            }
    }
    return state;

}

export default appReducer