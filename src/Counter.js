import React from "react";

class Counter extends React.Component{
    state = {count: 0};
     constructor (){
        super();
    
        setInterval(() => {
          this.setState ({
            count: this.state.count +1
          })

            }, 1000);
    }
    render(){
        return(
            <React.Fragment>
            <h1>{this.state.count}</h1>
            </React.Fragment>
        );
    }
}

export default Counter