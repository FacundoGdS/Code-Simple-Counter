//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let sec = 0;
//render your react application
setInterval( () => {
    let digit6 = Math.floor((sec / 100000) % 10);
    let digit5 = Math.floor((sec / 10000) % 10);
    let digit4 = Math.floor((sec / 1000) % 10);
    let digit3 = Math.floor((sec / 100) % 10);
    let digit2 = Math.floor((sec / 10) % 10);
    let digit1 = Math.floor((sec / 1) % 10);
    sec++
    ReactDOM.render(<Home c1={digit6} c2={digit5} c3={digit4} c4={digit3} c5={digit2} c6={digit1}/>, document.querySelector("#app")
);
}, 1000);


//if (c6===9){c6=0} else {c6++}; It was a valid path.


