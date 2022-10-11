import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return <>
    <p>
       Welcome,{this.props.name}
   </p>
   <Age  age= {29}/>
 </>
  }
}

export default Welcome;
