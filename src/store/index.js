import {createStore} from "redux";



const defaultState = {
    basket: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {...state, basket: [...state.basket, action.basket]}
        default:
            return state
    }

}
export const store = createStore(reducer)
