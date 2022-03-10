import ACTIONS_TYPE from '../constant'

export function incrementFoodItem(data={}){
  return {
    type: ACTIONS_TYPE.INCREMENT_FOOD_ITEM, data
  }
}

export function decrementFoodItem(data={}){
  return { type: ACTIONS_TYPE.DECREMENT_FOOD_ITEM, data}
}

export const updateFoodItem = data => ({type: ACTIONS_TYPE.UPDATE_FOOD_ITEM, data})

export const clearCart = data => ({type: ACTIONS_TYPE.CLEAR_CART, data})
