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
import LanguageComponent, { LanguageContext } from "./LanguageContext";
import Sum from "./Sum";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

import CustomCounter from "./UseCounter";
import { CustomLogin } from "./UseForm";
import { CarDetails } from "./CarDetails";
import {Route, BrowserRouter, Routes} from "react-router-dom"
import DisplayLanguage from "./DisplayLanguage";


function App () {
    
  
  return (
      
          <Routes>
              <Route path="/" element={<Welcome name="Emanuele" />} />
              <Route path="/counter" element={<Counter/>} />
          </Routes>
          
        
      )
  }



export default App;