const all = {
  linkValue: "",
  linkId: "",
  currentLabel: "التريند",
  select: "/movie/popular",
  data: [],
};
export default function Myredux(state = all, action) {
  switch (action.type) {
    case "SET_LINKVALUE":
      return {
        ...state,
        linkValue: action.payload,
      };
    case "SET_LINKID":
      return {
        ...state,
        linkId: action.payload,
      };
    case "SET_CURRENTLABEL":
      return {
        ...state,
        currentLabel: action.payload,
      };
    case "SET_SELECT":
      return {
        ...state,
        select: action.payload,
      };
    case "SET_Data":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
