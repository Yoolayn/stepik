"use client";

import { useReducer, useState } from "react";
import Jedi from "./jedi";
import NewJedi from "./newJedi.jsx";

const ACTIONS = {
	GET_CURRENT_JEDI: "get_current_jedi",
	FINISH_TRAINING: "finish_training",
	JOIN_DARK_SIDE: "join_dark_side",
	SET_JOB: "set_job"
};

const lukeState = {
	firstName : "Luke",
	lastName : "Skywalker",
	job : "moisture farmer",
	side : "light",
	weapons: {
		blaster : "DL-42"
	}
};

function reducer(state, action) {
	switch(action.type) {
		case ACTIONS.GET_CURRENT_JEDI:
			return action.payload;
		case ACTIONS.FINISH_TRAINING:
			return { ...state, job: "Jedi Knight", weapons: { lightsaber: "Blue" } };
		case ACTIONS.JOIN_DARK_SIDE:
			return { ...state, job: "Sith", side: "Dark", weapons: { lightsaber: "Red" } };
		case ACTIONS.SET_JOB:
		default:
			return state;
	}
}

function App() {
	const [ jedi, setJedi ] = useState([lukeState]);
	const [ state, dispatch ] = useReducer(reducer, lukeState);
	return <>
		<Jedi jedi={lukeState}/>
		<NewJedi addJedi={j => setJedi(i => [...i, j])}/>
	</>;
}

export default App;
