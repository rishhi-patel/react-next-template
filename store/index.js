import { createStore, applyMiddleware } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./reducers"

const makeStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
  return store
}

export const wrapper = createWrapper(makeStore)
