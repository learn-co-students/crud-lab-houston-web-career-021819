import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          name="text"
          value={this.state.text}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default RestaurantInput;
