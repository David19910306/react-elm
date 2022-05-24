import ACTIONS_TYPE from "../constant";

export default function (preState = {}, {type, data}) {
  switch (type){
    case ACTIONS_TYPE.SEND_ADDRESS:
      return {...data}
    default: return preState
  }
}
