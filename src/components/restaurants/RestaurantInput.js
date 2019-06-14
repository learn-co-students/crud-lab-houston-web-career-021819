import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text:""
  }

  handleOnChange = (e) =>{
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addRes(this.state.text)
    this.setState({text:''})
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <label>Restaurant Name:</label>
          <input type = "text" onChange = {this.handleOnChange}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
