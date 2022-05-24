import ACTIONS_TYPE from "../constant";

export const recordGeohash = (data = '') => {
  console.log(data)
  return {
    type: ACTIONS_TYPE.RECORD_GEOHASH, data
  }
}

