import { queryHelpers } from "@testing-library/react";
import React, { Component } from "react";
class Counter extends Component {



  state = {count :localStorage.getItem('count'),
    imageUrl:'https://picsum.photos/200' 
};


  render() {
    return (
      <div className="counter-container">
        <span className="">{this.formatCount()}</span>
        <button className="todo-button" onClick={this.handleIncrement} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="todo-button" onClick={this.handleDecrement} type="submit">
        <i className="fas fa-minus-square"></i>
      </button>


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
