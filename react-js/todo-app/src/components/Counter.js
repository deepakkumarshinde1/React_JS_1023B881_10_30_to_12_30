import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  inc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  dec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <center>
          <h1>{this.state.count}</h1>
          <button onClick={this.inc}>Inc</button>
          <button onClick={this.dec}>Dec</button>
        </center>
      </>
    );
  }
}

export default Counter;
