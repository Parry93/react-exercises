import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Welcome from "./Welcome";

Welcome.defaultProps = {
  name: "John",
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome age={29} />{" "}
        <Counter initValue={0} setIncrement={+1} setInterval={1000} />{" "}
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome/>
      </div>
    );
  }
}
export default App;
