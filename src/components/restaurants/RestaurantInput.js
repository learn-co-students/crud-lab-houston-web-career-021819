import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  state = {
    controlledText: ""
  }
  handleChange = (e) => {
    this.setState({ controlledText: e.target.value })
  }

  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()
    this.props.addRestaurant({ name: this.state.controlledText})
    this.setState({ controlledText: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.controlledText} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addRestaurant: payload => dispatch({ type: "ADD_RESTAURANT", payload })
})

export default connect(null, mapDispatchToProps)(RestaurantInput)
