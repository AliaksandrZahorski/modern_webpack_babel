import React, { Component } from "react";

import css from './style.scss';

class App extends Component {
  state = {
    test: "zzz",
    value: 0
  };

  handleClick = t => e => {
    this.setState(state => ({value: state.value + t}))
  };

  render() {
    const { test, value } = this.state;
    return (
      <div>
        <h1>Hello World2</h1>
        <div className="some">{test}a{value}</div>
        <div className={css.some}>{test}a{value}</div>
        <button onClick={this.handleClick(1)}>pp</button>
        <button onClick={this.handleClick(-1)}>mm</button>
      </div>
    );
  }
}
export default App;
