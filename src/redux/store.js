import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/es/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import loginRecuder from "./reducers/login";
import homeReducer from "./reducers/home";
import foodItemReducer from './reducers/foodItem'

const allReducers = combineReducers({
  userInfo: loginRecuder,
  home: homeReducer,
  foodItemState: foodItemReducer
})

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}
const myPersistReducer = persistReducer(persistConfig, allReducers)

export default createStore(myPersistReducer, composeWithDevTools())
