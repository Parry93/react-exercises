import React from "react";
import CounterDisplay from "./CounterDisplay";
class Counter extends React.Component {
  state = { count: this.props.initValue };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.setIncrement,
      });
    }, this.props.setInterval);
  }
  render() {
    return <CounterDisplay display={this.state.count} />;
  }
}

export default Counter;
