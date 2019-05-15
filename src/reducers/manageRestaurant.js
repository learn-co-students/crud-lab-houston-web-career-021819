import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const rest = {
        id: cuid(),
        text: action.payload
      };
      return { ...state, restaurants: state.restaurants.concat(rest) };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.payload.id
        )
      };
    case "ADD_REVIEW":
      const rev = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      return { ...state, reviews: state.reviews.concat(rev) };
    case "REMOVE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      };
    default:
      return state;
  }
}
