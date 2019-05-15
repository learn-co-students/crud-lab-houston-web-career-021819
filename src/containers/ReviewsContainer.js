import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  filterReviews = () => {
    return this.props.reviews.filter(review => {
      return review.restaurantId === this.props.restaurant.id;
    });
  };

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.filterReviews()}
          removeReview={this.props.removeReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: reviewData =>
      dispatch({ type: "ADD_REVIEW", review: reviewData }),
    removeReview: reviewId => dispatch({ type: "REMOVE_REVIEW", id: reviewId })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
