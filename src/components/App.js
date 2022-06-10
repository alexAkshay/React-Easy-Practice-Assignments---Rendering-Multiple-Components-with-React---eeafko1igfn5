import React, {Component, useState} from "react";
import Heading from "./components/Heading";
import Descreption from "./components/Descreption";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
    <Headng data-ns-test="project-name"/>
    <Descreption data-ns-test="project-description"/> 
    </div>
  )
}


export default App;
