import "../styles/App.css";
import { Trans } from "@lingui/macro";
import React from "react";

const Contact = () => (
	<div className="contact">
		<Trans id="contact">
		<h1>Contact Me</h1>
		<p>
			You can reach me via email: <strong>hello@example.com</strong>
		</p>
		</Trans>
	</div>
);

export default Contact;