import ACTIONS_TYPE from "../constant";

export default function FoodItemState(preState = [], {type, data}){
  switch (type){
    case ACTIONS_TYPE.FOOD_ITEM_STATE:
      console.log(...preState)
      console.log('----------------', preState.find(pre => pre.id === data.id))
      console.log(data)
      // return [data, ...preState]
      return preState.find(pre => pre.id === data.id)? [...preState]: [data, ...preState]
    default: return preState
  }
}
