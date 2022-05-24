import ACTIONS_TYPE from '../constant'

export const recordUserInfo = data => ({type: ACTIONS_TYPE.RECORD_USERINFO, data})

export const clearUserInfo = data => ({type: ACTIONS_TYPE.CLEAR_USERINFO, data})

