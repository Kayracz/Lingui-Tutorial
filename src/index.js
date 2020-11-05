import React, { useState } from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

async function loadMessages(language) {
	// The keyword Await makes JavaScript wait until the promise returns a result.
	// makes the async function block wait
	return await import(`@lingui/loader!./locales/${language}/messages.json`);
}

// STATES
const LocalizedApp = () => {
	const [catalogs, setCatalogs] = useState({});
	const [language, setLanguage] = useState("es");

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
