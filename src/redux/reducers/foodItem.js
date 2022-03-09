import ACTIONS_TYPE from "../constant";

export default function FoodItemState(preState = [], {type, data}){
  switch (type){
    case ACTIONS_TYPE.INCREMENT_FOOD_ITEM:
      return preState.find(pre => pre.id === data.id)? [data, ...preState.filter(pre => pre.id !== data.id)]: [data, ...preState]
    case ACTIONS_TYPE.DECREMENT_FOOD_ITEM:
      return data.count > 0 && preState.find(pre => pre.id === data.id)? [data, ...preState.filter(pre => pre.id !== data.id)]: [...preState.filter(pre => pre.count > 0)]
    default: return preState
  }
}
