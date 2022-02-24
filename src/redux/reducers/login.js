import ACTIONS_TYPE from "../constant";

function recordUserInfo(preState = {}, {type, data}){
  switch (type) {
    case ACTIONS_TYPE.RECORD_USERID:
      return data
    default: return preState
  }
}

export default recordUserInfo
