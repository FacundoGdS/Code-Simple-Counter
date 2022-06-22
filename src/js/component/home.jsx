import React from "react";
import PropTypes from 'prop-types';

//create your first component
const Home = (props) => {
	return (
		<div className="inline-b">
			<div><i className="far fa-clock"></i></div>
			<div><p>{props.c1}</p></div>
			<div><p>{props.c2}</p></div>
			<div><p>{props.c3}</p></div>
			<div><p>{props.c4}</p></div>
			<div><p>{props.c5}</p></div>
			<div><p>{props.c6}</p></div>
			<div id="made"><p>Made by Facundo Gul</p></div>
		</div>
	);
};

Home.propTypes = {
	c1: PropTypes.number,
	c2: PropTypes.number,
	c3: PropTypes.number,
	c4: PropTypes.number,
	c5: PropTypes.number,
	c6: PropTypes.number,
  };

export default Home;
