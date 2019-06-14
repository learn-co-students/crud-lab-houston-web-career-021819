import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant = {this.props.restaurant} addReview = {(text)=>this.props.addReview(this.props.id, text)} restaurantId = {this.props.id}/>
        <Reviews reviews = {this.props.reviews} restaurantId = {this.props.id} deleteReview = {this.props.deleteReview}/>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return { reviews: state.reviews}
}

const mapDispatchToProps = {
    addReview: (id, text) =>({type:'ADD_REVIEW', text:text, resId:id}),
    deleteReview: (id) =>({type: 'DELETE_REVIEW', id:id})
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
