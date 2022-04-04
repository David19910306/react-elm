import ACTIONS_TYPE from "../constant";

function login(preState = {}, {type, data}){
  switch (type) {
    case ACTIONS_TYPE.RECORD_USERINFO:
      return data
    case ACTIONS_TYPE.CLEAR_USERINFO:
      return data
    default: return preState
  }
}

export default login
