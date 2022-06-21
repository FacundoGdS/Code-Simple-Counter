//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;

//render your react application
ReactDOM.render(<Home contador1={contador1} contador2={contador2} contador3={contador3} contador4={contador4} contador5={contador5} contador6={contador6}/>, document.querySelector("#app"));

