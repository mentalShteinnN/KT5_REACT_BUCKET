import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './countReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    count: countReducer,
})
 
export const store = createStore(rootReducer, applyMiddleware(thunk))