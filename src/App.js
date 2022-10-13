import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";


Welcome.defaultProps = {
    name: "John",
    
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome age= {29} /> 
        <Counter   initValue={0} setIncrement={+1} setInterval={1000}/>
      </div>
    );
  }
}
export default App;
