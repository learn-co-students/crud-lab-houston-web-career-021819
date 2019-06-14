import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {

  render() {
    const deleteRestaurant = this.props.deleteRes
    const resList = this.props.restaurants.map(res => { return <Restaurant  restaurant = {res} deleteRestaurant = {deleteRestaurant}/>})
    return(
      <ul>
        {resList}
      </ul>
    );
  }
};

export default Restaurants;