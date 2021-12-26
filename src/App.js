import  React, { Component }from "react";
import './App.css';
import './Component/Styles.css';
import Greet from './Component/Component1';
import Welcome from './Component/Component2';


class App extends Component {
  state ={
    isRightComponent : false,
    isLeftComponent : false
  }
  render(){
    return(
      <div className='App'>
        <div className='Header'>
             <h1 className='heading'>Styling using Functional and Class Component</h1>
             <button onClick={()=>this.setState({isLeftComponent:!this.state.isLeftComponent})}>To see styling in function component</button>
             <button onClick={()=>this.setState({isRightComponent:!this.state.isRightComponent})}>To see styling in class component</button>
             {
               this.state.isRightComponent?<Welcome/>:null
             }
             {
               this.state.isLeftComponent?<Greet/>:null
             }
        </div>
      </div>
    )
  }
}


export default App;