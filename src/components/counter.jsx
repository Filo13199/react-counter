import MyButton from "./MyButton";
import React, { Component } from "react";
class Counter extends Component {
  state = {count :localStorage.getItem('count'),
 
};


  render() {
    return (
      <div className="counter-container">
      <MyButton  type="Increment" handle={this.handleIncrement} iconPath={require("../assets/AddIcon.png")} />  
      <span className="">{this.formatCount()}</span>

      <MyButton  type="Decrement" iconPath={require("../assets/MinusIcon.png")} handle={this.handleDecrement} />  
      </div>
    );
  }
  myHelper= ()=>{
    const count= this.state.count;
    if(!count){
        this.state.count=0;
        localStorage.setItem('count',count);
    }
  }
  handleIncrement= ()=>{
      this.myHelper();
      const count= this.state.count;
      const countInt=parseInt(count);
      localStorage.setItem('count',countInt+1);
      this.setState({count:countInt+1});  
      console.log(localStorage.getItem('count'));

    }
  handleDecrement =()=>{
    this.myHelper();
    const count= this.state.count;
    const countInt=parseInt(count);

    localStorage.setItem('count',countInt-1);
    this.setState({count:countInt-1});  
console.log(localStorage.getItem('count'));
      
}
formatCount(){
      const {count} =this.state;
    return count === 0?'Zero' :localStorage.getItem('count');
  
}

}
export default Counter;
