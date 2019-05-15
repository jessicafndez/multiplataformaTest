import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

// our
import mainReducers from './reducers/mainReducers';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
      mainReducers,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
}