import MyButton from "./MyButton";
import React, { Component } from "react";
class Counter extends Component {
  state = { count: localStorage.getItem("count") };

  render() {
    return (
      <div className="counter-container">
        <MyButton
          type="Increment"
          handle={this.handleIncrement}
          buttonName="fas fa-plus-circle"
        />
        <span className="">{this.formatCount()}</span>

        <MyButton
          type="Decrement"
          iconPath={require("../assets/MinusIcon.png")}
          handle={this.handleDecrement}
          buttonName="fas fa-minus-circle"
        />
      </div>
    );
  }
  myHelper = () => {
    const count = this.state.count;
    if (!count) {
      this.setState({count:0});
      localStorage.setItem("count", 0);
    }
  };
  handleIncrement = () => {
    this.myHelper();
    const count = this.state.count;
    const countInt = parseInt(count);
    localStorage.setItem("count", countInt + 1);
    this.setState({ count: countInt + 1 });
    console.log(localStorage.getItem("count"));
  };
  handleDecrement = () => {
    this.myHelper();
    const count = this.state.count;
    const countInt = parseInt(count);
    localStorage.setItem("count", countInt - 1);
    this.setState({ count: countInt - 1 });
    console.log(localStorage.getItem("count"));
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : localStorage.getItem("count");
  }
}
export default Counter;
