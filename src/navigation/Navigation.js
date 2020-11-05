import "../styles/App.css";
import { Trans } from "@lingui/macro";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";

const Navigation = () => (
	<Navbar bg="dark" expand="lg" className="navigationBar">
		<Trans id="navigation">
			<span>
				<NavLink to="/">Home</NavLink>
			</span>

			<span>
				<NavLink to="/about">About</NavLink>
			</span>

			<span>
				<NavLink to="/contact">Contact</NavLink>
			</span>
		</Trans>
	</Navbar>
);

export default Navigation;