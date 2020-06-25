import React, {Component} from "react";

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  
  render() {
    console.log('执行了render');
    return (
      <div>
        <button onClick={e => this.increament()}>+1</button>
        {this.state.count}
        <button>-1</button>
      </div>
    )
  }
  
  componentDidMount() {
    console.log('执行了componentDidMount');
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('update');
  }
  
  increament() {
    this.setState({
      count: this.state.count + 1
    })
  }
}