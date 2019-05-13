import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantInput />
        <Restaurants deleteRestaurant = {this.props.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: payload => dispatch({ type: "DELETE_RESTAURANT", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
