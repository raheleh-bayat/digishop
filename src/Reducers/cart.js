export default function cartReducer(state = { number: 0 }, action) {
    if (action.type == "ADD_CART") {
      return {
        number: state.number + 1,
      }
    }
    return state;
  }