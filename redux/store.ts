import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer'
import Thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(Thunk))

export default store 