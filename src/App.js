import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";



export class App extends React.Component {

    render() {

        return(

            <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome name="Emanuele"/>}/>    
            </Routes>
            </BrowserRouter>
            </>
        )
    }
}