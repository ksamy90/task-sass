class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h2>{this.props.design}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter design="attending broadway shows" />,
  document.getElementById("app")
);
