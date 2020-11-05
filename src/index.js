import React, { useState } from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// This file is responsible for importing the translations of the selected language and rendering the whole webpage.

async function loadMessages(language) {
	return await import(`@lingui/loader!./locales/${language}/messages.json`);
	// The keyword Await makes JavaScript wait until the promise returns a result.
	// makes the async function block wait
}

// STATES
const LocalizedApp = () => {
	const [language, setLanguage] = useState("en");
	const [catalogs, setCatalogs] = useState({});

	async function handleLanguageChange(language) {
		const newCatalog = await loadMessages(language);
		const newCatalogs = { ...catalogs, [language]: newCatalog };

		setCatalogs(newCatalogs);
		setLanguage(language);
	}

	return (
		<BrowserRouter>
			<I18nProvider language={language} catalogs={catalogs}>
				<App
					language={language}
					onLanguageChange={handleLanguageChange}
				/>
			</I18nProvider>
		</BrowserRouter>
	);
};

ReactDOM.render(<LocalizedApp />, document.getElementById("root"));
// #1 setting App language and onlanguagechange in app
