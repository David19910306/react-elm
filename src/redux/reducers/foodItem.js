import ACTIONS_TYPE from "../constant";

export default function FoodItemState(preState = [], {type, data}){
  switch (type){
    case ACTIONS_TYPE.INCREMENT_FOOD_ITEM:
      return preState.find(pre => pre.id === data.id)? [data, ...preState.filter(pre => pre.id !== data.id)]: [data, ...preState]
    case ACTIONS_TYPE.DECREMENT_FOOD_ITEM:
      return data.count > 0 && preState.find(pre => pre.id === data.id)? [data, ...preState.filter(pre => pre.id !== data.id)]: [...preState.filter(pre => pre.count > 0)]
    case ACTIONS_TYPE.UPDATE_FOOD_ITEM: // 此处用于购物车中对foodItemState状态的更改，data传过来就是一个更新后数组，直接return即可
      const zerodata = data.find(data => data.count === 0)
      return zerodata? [...data.filter(data => data.count > 0)]: [...data]
    case ACTIONS_TYPE.CLEAR_CART:
      return [...data]
    default: return preState
  }
}
