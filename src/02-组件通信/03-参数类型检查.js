import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <Child list={[1,2,3]} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    let {list} = this.props;
    return (
      <div>
        {
          list.map(i => <div>{i}</div>)
        }
      </div>
    )
  }
  // 类型检查
  static propTypes = {
    list: PropTypes.array
  }
}

export default App;