"use client";

import CreateJedi from "./createJedi";
import JediList from "./listJedi.jsx";
import ShowJedi from "./showJedi";
import { JediContextProvider } from "./jediContext";

function App() {
	return <JediContextProvider>
			<ShowJedi/>
			<CreateJedi/>
			<JediList/>
		</JediContextProvider>;
}

export default App;
