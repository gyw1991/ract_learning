import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <div>
        当前数量: {this.state.count}
        <Button btnClick={this.btnClick}/>
      </div>
    );
  }
  
  btnClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

class Button extends Component {
  render() {
    // 从props中取出传递来的函数
    let {btnClick} = this.props;
    return (
      <div>
        <button onClick={btnClick}>+1</button>
      </div>
    )
  }
}

export default App;