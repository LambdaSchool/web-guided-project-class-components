import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      inputValue: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddItem(this.state.inputValue)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} value={this.state.inputValue} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;