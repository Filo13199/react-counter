import React, { Component } from "react";
import "../styles/AddButton.scss";


class myButton extends Component {
  state = { type: "" };
  render() {
    console.log(this.props.buttonName);
    return (
      <button className="myButton" onClick={this.props.handle}>
        <i className={this.props.buttonName}></i>
      </button>
    );
  }
}

export default myButton;
