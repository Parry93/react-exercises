import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

Welcome.defaultProps = {
    name: "Gigi"
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome age = {29} />
      </div>
    );
  }
}
export default App;
