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
import {Route, BrowserRouter, Routes, Link} from "react-router-dom"
import DisplayLanguage from "./DisplayLanguage";
import ShowGithubUser from "./ShowGithubUser";


function App () {
    
  
  return (
      <>
          <Routes>
              <Route path="/" element={<Welcome name="Emanuele" />} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/users" element={<GithubUserList/>}>
                    <Route index element={<h2>Add a user and select it</h2>}/>
                    <Route path=":username" element={<ShowGithubUser/>}/>
                </Route>
              <Route path="*" element={<div><h1>Not found</h1></div>} />
          </Routes>

            <div >
            <Link to="./" ><h2>Home</h2></Link>
            <Link to="./counter" ><h2>Counter</h2></Link>
            <Link to="./users" ><h2>User</h2></Link>
         </div>
         
         
         </>
      )
  }



export default App;