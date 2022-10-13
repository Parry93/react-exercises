import React from "react";

class Counter extends React.Component {
  state = { count: this.props.initValue };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.setIncrement
      });
    }, this.props.setInterval);
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
      </React.Fragment>
    );
  }
}

export default Counter;
