let counter = 0;

export default function productReducer(state = [], action) {
  if (action.type == "ADD_PRODUCT") {
    action.payload.id = ++counter;
    return [...state, action.payload];
  }
  if (action.type == "REMOVE_PRODUCT") {
    return state.filter(item => item.id != action.payload.id)
  }
  return state;
}
