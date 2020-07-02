import React, { Component, Fragment } from 'react';
import backButton from "../img/backButton.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from "../components/Inicio";
import Menudesayuno from "../components/Menudesayuno";
import Menualmuerzo from "../components/Menualmuerzo";

class Waiter extends Component {

	backButton = () => { 
		console.log('clicked back button')   
		return(
		<Router>
		  <Route exact path="/">
			  <Inicio />
		  </Route>
		</Router>
		);
	   
	  };

	render() {
		return (
			<div className="WaiterDiv">
				<Link to="/">
					<img
						onClick={() => this.backButton()}
						alt="backButton"
						src={backButton}
						className="backButton"
					/>
				</Link>   
                <Menudesayuno />
				<Menualmuerzo />
			</div>

		);
	}
}


export default Waiter;
