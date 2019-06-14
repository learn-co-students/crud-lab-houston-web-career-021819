import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text:""
  }

  handleOnChange = (e) =>{
    this.setState({text:e.target.value})
  }

  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addReview(this.state.text)
    this.setState({text:""})
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <label>Review:</label>
          <input type = "text" onChange = {this.handleOnChange}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
