import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          deleteRestaurant={this.props.deleteRestaurant}
          updateRestaurant={this.props.updateRestaurant}
          restaurants={this.props.restaurants}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurantData =>
      dispatch({ type: "ADD_RESTAURANT", payload: restaurantData.text }),
    deleteRestaurant: restaurantData =>
      dispatch({ type: "DELETE_RESTAURANT", payload: restaurantData }),
    updateRestaurant: restaurantData =>
      dispatch({ type: "UPDATE_RESTAURANT", payload: restaurantData })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
