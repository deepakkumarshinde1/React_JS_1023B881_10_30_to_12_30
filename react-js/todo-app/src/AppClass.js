import { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }
  text = "Welcome to 3ri tech";
  // arrow function
  changeText = () => {
    this.text = "Its awesome";
    alert(this.text);
  };
  render() {
    return (
      <>
        Hello World <h1>{this.text}</h1>
        <button onClick={this.changeText}>Change Text</button>
      </>
    );
  }
}

// export
export default App;
