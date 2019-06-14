
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[], reviews:[]}, action) {
   switch(action.type){
       case 'ADD_RESTAURANT':
           const res = {
               id: cuid(),
               text: action.text,
            //    reviews:[]
           }
       return {...state, restaurants: state.restaurants.concat(res)}

       case 'DELETE_RESTAURANT':
       return {restaurants: state.restaurants.filter(res => res.id !== action.id)}
       
       case 'ADD_REVIEW':
           const review = {
               id: cuid(),
               restaurantId: action.resId,
               text: action.text
           }
        //    const findRes = state.restaurants.find(res => res.id == action.resId)
        //    findRes.reviews.concat(action.text)
        return {...state, reviews:[...state.reviews, review]}

        case 'DELETE_REVIEW':
        return {...state, reviews:state.reviews.filter(review => review.id !== action.id)}    
       default:
       return state;
   }
}
