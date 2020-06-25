import React, {Component} from 'react';

class Child extends Component{
  render() {
    /*子组件中默认会保存props*/
    console.log(this.props);
    let { name, height } = this.props;
    return (
      <div>
        <h2>{`姓名:${name},身高${height}`}</h2>
      </div>
    )
  }
  
}

class App extends Component {
  render() {
    return (
      <div>
        {/*传递参数*/}
        <Child name='gyw' height='177'/>
      </div>
    );
  }
}

export default App;