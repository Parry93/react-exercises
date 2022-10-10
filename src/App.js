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
        <Welcome />
      </div>
    );
  }
}
export default App;
