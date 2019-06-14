import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRes = {this.props.addRes} />
        <Restaurants restaurants = {this.props.restaurants} deleteRes = {this.props.deleteRes}/>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = {
  addRes: (name) =>({type:'ADD_RESTAURANT', text:name}),
  deleteRes: (id) =>({type: 'DELETE_RESTAURANT', id:id})
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
