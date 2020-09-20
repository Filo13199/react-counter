import React, { Component } from 'react';
class myButton extends Component {
    state = { type:"" ,className:""};
    render() { 
        return (   <button className="counter-button" onClick={this.props.handle} type="submit">
          <img src ={this.props.iconPath}/>
       
      </button>
      );
    }


    

  
}
 
export default myButton;