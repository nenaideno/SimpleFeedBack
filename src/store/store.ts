import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

// reducers
import generatorReducer from "./reducers/generatorReducer";
import formsReducer from "./reducers/formsReducer";


const store = createStore(combineReducers({
    generator: generatorReducer,
    forms: formsReducer,
}), applyMiddleware(thunk))

export default store;