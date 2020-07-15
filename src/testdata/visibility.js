import React from "react";
import ReactDOM from "react-dom";

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.state = {
      visibility: false,
    };
  }
  toggleVisible() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisible}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <p>Hi, here are your details you can now see</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
