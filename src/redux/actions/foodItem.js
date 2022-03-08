import ACTIONS_TYPE from '../constant'

export function foodItem(data={}){
  return {
    type: ACTIONS_TYPE.FOOD_ITEM_STATE, data
  }
}
