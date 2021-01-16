import lang from "../../data/texts.json"

const initialState = lang[0]

const textReducer = (state = initialState) => { return state }

export default textReducer