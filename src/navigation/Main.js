import React from "react";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import { Switch, Route } from "react-router-dom";

const Main = () => (
	// <Switch> is unique in that it renders a route exclusively. 
	// In contrast, every <Route> that matches the location renders inclusively.
	<Switch>
		<Route exact path="/" component={Home}></Route>
		<Route exact path="/about" component={About}></Route>
		<Route exact path="/contact" component={Contact}></Route>
	</Switch>
);

export default Main;