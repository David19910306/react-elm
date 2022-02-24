import {createStore, combineReducers} from 'redux'
import loginRecuder from "./reducers/login";

const allReducers = combineReducers({
  userInfo: loginRecuder
})
 export default createStore(allReducers)
