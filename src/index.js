import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  handleClick(e) {
    if (e.target.innerText === "click") {
      this.setState({
        counter: this.state.counter + 1
      });
    } else {
      this.setState({
        counter: 0
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.text}</h1>
        <Buttons click={this.handleClick.bind(this)} />
        <h2>No.of Clicks:{this.state.counter}</h2>
      </div>
    );
  }
}

App.defaultProps = {
  text: "Hello World"
};

const Buttons =props=>{
  return (
    <div>
    <button type="button" onClick={props.click}>
    click
        </button>
    <button type="button" onClick={props.click}>
      reset
        </button>
      </div>
      );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
