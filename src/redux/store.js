import { composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer';

const initialState = {map: undefined, userlist: JSON.parse(localStorage.getItem('brew-finder')) || undefined, search: undefined}

const composeEnhancers = composeWithDevTools({})

// const localStorageMiddleware = storeAPI => next => action => {
//     const state = storeAPI.getState()
    
//     return next(action)
// }

const middlewareEnhancer = applyMiddleware()

const store = createStore(rootReducer, initialState, composeEnhancers(middlewareEnhancer))
store.subscribe(()=>{
    const state = store.getState()
    localStorage.setItem('brew-finder', JSON.stringify(state.userlist))
})
export default store;