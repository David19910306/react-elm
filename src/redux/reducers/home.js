import ACTIONS_TYPE from "../constant";

function home(preState = '', {type, data}) {
  switch (type){
    case ACTIONS_TYPE.RECORD_GEOHASH:
      return data
    default: return preState
  }
}

export default home
