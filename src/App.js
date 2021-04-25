import logo from './logo.svg';
import './App.css';
import React  from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App" >

     welcome to our counter
     <Counter/>
    </div>
  );
  
}
}

class Counter extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  increase=()=>{
    this.setState({count:this.state.count+1})
  }
  decrease=()=>{
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <div>
<div>{this.state.count}</div>
<button onClick={this.increase}>Increase</button>
<button onClick={this.decrease}>Decrease</button>
{/* <div>iam usin {this.props.brand}</div> */}

</div>
    );
  }
}

export default App;
