import immutable from "immutable"

const defaultState = immutable.fromJS({
  count: 1234,
  msg: "huhuuhuh",
  banner: [],
  middlebanner: [],
  brandbanner: [],
  smallbanner: [],
  noticebar:[],
  indexlist:[],
  detail:"",
  goodsList:[],
  goodsType:[],
  indexdetail:[],
  seracDetail:[],
  // keyword:""
  gotoshoppingcar:"",
  shoppingInfo:[]


})

export const data = (state = defaultState, action) => {
  // console.log(action);
  switch (action.type) {
    case "getBanner":
      return state.set("banner", action.payload)
      break;

    case "getMiddleBanner":
      return state.set("middlebanner", action.payload);
      break;
    case "getBrandbanner":
      return state.set("brandbanner", action.payload);
      break;

    case "getSmallbanner":
      return state.set("smallbanner", action.payload);
      break;
    case "getNoticebar":
      return state.set("noticebar",action.payload);
      break;
      
    case "getIndexList":
      return state.set("indexlist",action.payload);
      break;
    case "getIndexDetail":
      return state.set("detail",action.payload);
      break;
    case "getGoodsType":
      return state.set("goodsType",action.payload);
      break;
    case "getGoodsList":
      return state.set("goodsList",action.payload);
      break;
    case  "getListDetail":
      return state.set("indexdetail",action.payload);
      break;
    case "getSearchDetail":
      return state.set("seracDetail",action.payload);
      break;

    case  "addShoppingCar":
      return state.set("gotoshoppingcar",action.payload);
      break;
    case "showShoppingCarInfo":
      return state.set("shoppingInfo",action.payload);
      break;
    case "ChangeGoodListReverse":
      return  state.set("goodsList",state.toJS().goodsList.reverse());
      break;
    case "ChangeIndexListReverse":
      return  state.set("indexlist",state.toJS().indexlist.reverse());
      break;
    case "ChangeSerchListReverse":
      return state.set("seracDetail",state.toJS().seracDetail.reverse());
    break;
    default:
      return state
      break;
  }
}

