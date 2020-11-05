import React from "react";
import "../styles/App.css";
import { Trans } from "@lingui/macro";

function Home() {
	return (
		<div className="home">
			<Trans id="welcome.title">
				<h1>Welcome to my playground</h1>
				<p> Let's translate </p>
			</Trans>
		</div>
	);
}

export default Home;
