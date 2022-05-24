import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/es/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import loginRecuder from "./reducers/login";
import homeReducer from "./reducers/home";
import foodItemReducer from './reducers/foodItem'
import addressReducer from "./reducers/address";

const allReducers = combineReducers({
  userInfo: loginRecuder,
  home: homeReducer,
  foodItemState: foodItemReducer,
  address: addressReducer
})

// 在persistConfig中增加blacklist或whitelist属性来设置哪些reducer需要被缓存，哪些不需要被缓存，其中属性值为一个数组，即whitelist:['reducerName'],表示only持久化reducerName，黑名单表示不会持久化reducerName
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['foodItemReducer'] // 表示选中的购物车中的数据不会被持久化
}
const myPersistReducer = persistReducer(persistConfig, allReducers)

export default createStore(myPersistReducer, composeWithDevTools())
