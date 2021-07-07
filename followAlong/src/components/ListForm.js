import React from "react";

class ListForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('test');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;