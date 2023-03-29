import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import flightsListReducer from './gateway/reducer'

const reducer = combineReducers({
    flights: flightsListReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
