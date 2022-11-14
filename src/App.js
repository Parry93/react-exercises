import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";
import Container from "./Container";
import LanguageComponent from "./LanguageContext";
import Sum from "./Sum";
import { GithubUser } from "./GithubUser";
import GithubUserList from "./GithubUserList";

import CustomCounter from "./UseCounter";
import { CustomLogin } from "./UseForm";



Welcome.defaultProps = {
  name: "John",
};
class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
    
  };

  render() {
    return (
      <div>
        <Container title="this is a component composition ">
        
        <Hello />
        
        <Welcome age={29}/>
        
        <Counter />
        
        <ClickCounter onCounterChange = {(counter)=> {
                         console.log(counter)
                    }}/>
        
        <ClickTracker />
        
        <InteractiveWelcome />
        
        <Login onLogin={this.onLogin} /> 
        
        <UncontrolledLogin />
        
        <TodoList render = { (items, removeItem) => {
                            return (
                             items.map((item, index)=> (
                                    <div key={item + index}>{item}

                                      <button type='button' onClick={(event)=>{removeItem(event, index)}} >Remove</button>
                                    </div>
                                ))
                            )
                            }
                        } />
        
        <LanguageComponent />

        <Sum />

        <GithubUser />
   
   <GithubUserList />

   <CustomCounter />

   <CustomLogin />
        </Container>

        
        
      </div>
    );
  }
}
export default App;
