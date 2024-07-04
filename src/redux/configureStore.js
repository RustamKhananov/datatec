import { thunk } from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from 'redux'

const configureStore = (reducers) => {
  const combinedReducers = combineReducers(reducers)

  const middlewares = [thunk]

  const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares)
  )

  return store
}

export default configureStore
