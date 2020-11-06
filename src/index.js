import React, { useState } from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// This file is responsible for importing the translations of the selected language and rendering the whole webpage.

async function loadCatalogs(language) {
	// prepend @lingui/loader: in front of path to message catalog you want to import (dynamic loading).
	return await require(`@lingui/loader!./locales/${language}/messages.json`);
}

const LANGUAGE_KEY = "language";

// STATES
const TranslationApp = () => {
	const [catalogs, setCatalogs] = useState({});
	const [language, setLanguage] = useState("en");

	async function handleLanguageChange(language) {
		const newCatalog = await loadCatalogs(language);
		const newCatalogs = { ...catalogs, [language]: newCatalog };

		setCatalogs(newCatalogs);
		setLanguage(language);

		localStorage.setItem(LANGUAGE_KEY, language);
		setCatalogs(newCatalogs);
		setLanguage(language);

	}

	React.useEffect(() => {
		const persistedLanguage = localStorage.getItem(LANGUAGE_KEY);
		if (language !== persistedLanguage) {
			setLanguage(persistedLanguage);
		}
	}, []);

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

ReactDOM.render(<TranslationApp />, document.getElementById("root"));
// #1 setting App language and onlanguagechange in app
