import { createStore, combineReducers } from "redux"
import appReducer from "./reducers/appReducer"
import userReducer from "./reducers/userReducer"
import textReducer from "./reducers/textReducer"
import stylesReducer from "./reducers/stylesReducer"

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    text: textReducer,
    styles: stylesReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore 