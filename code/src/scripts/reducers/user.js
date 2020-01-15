import immutable from "immutable"

const defaultState = immutable.fromJS({
  pic: null,
  mobile: "",
  token:sessionStorage.token
})

export const user = (state = defaultState, action) => {
  // console.log(action);
  switch (action.type) {
     case "changeUser":
       var obj ={...state.toJS(),...action.payload}   //先合并并转为js可变对象再转为不可变对象
       return immutable.fromJS(obj);
       break;

    default:
      return state
      break;
  }
}
