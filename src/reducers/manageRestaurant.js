import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return { ...state, restaurants: [...state.restaurants, {text: action.payload.name, id: cuid()}] }
    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.payload) }
    default:
      return state
  }
}
