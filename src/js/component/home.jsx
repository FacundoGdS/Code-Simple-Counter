import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="inline-b">
			<div><i className="far fa-clock"></i></div>
			<div><p>{props.contador1}</p></div>
			<div><p>{props.contador2}</p></div>
			<div><p>{props.contador3}</p></div>
			<div><p>{props.contador4}</p></div>
			<div><p>{props.contador5}</p></div>
			<div><p>{props.contador6}</p></div>
		</div>
	);
};

export default Home;
