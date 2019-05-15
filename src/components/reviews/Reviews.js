import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    return (
      <ul>
        {console.log(this.props.reviews)}
        {this.props.reviews.map(review => {
          return (
            <Review
              key={review.id}
              review={review}
              removeReview={this.props.removeReview}
            />
          );
        })}
      </ul>
    );
  }
}

export default Reviews;
