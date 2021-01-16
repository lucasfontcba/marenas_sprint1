import { SETLOGIN_USER } from "../actions/types"

const initialState = {

    login: false,

}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SETLOGIN_USER: return { ...state, login: action.data }
    }
    return state;

}

export default userReducer