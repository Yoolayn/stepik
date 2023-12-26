"use client";

import { useReducer, useState } from "react";
import Jedi from "./jedi";
import NewJedi from "./newJedi.jsx";
import ListJedi from "./listJedi";

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

function reducer(jedi, setJedi, state, action) {
	switch(action.type) {
		case ACTIONS.GET_CURRENT_JEDI:
			return action.payload;
		case ACTIONS.FINISH_TRAINING: {
				const idx = jedi.indexOf(state);
				const updated = { ...state, job: "Jedi Knight", weapons: { lightsaber: "Blue" } };
				const newJedi = [...jedi];
				newJedi[idx] = updated;
				setJedi(newJedi);
				return updated;
			}
		case ACTIONS.JOIN_DARK_SIDE: {
				const idx = jedi.indexOf(state);
				const updated = { ...state, job: "Sith", side: "Dark", weapons: { lightsaber: "Red" } };
				const newJedi = [...jedi];
				newJedi[idx] = updated;
				setJedi(newJedi);
				return updated;
			}
		case ACTIONS.SET_JOB: {
				const idx = jedi.indexOf(state);
				const updated = { ...state, job: action.job };
				const newJedi = [...jedi];
				newJedi[idx] = updated;
				setJedi(newJedi);
				return updated;
			}
		default:
			return state;
	}
}

function App() {
	const [ jedi, setJedi ] = useState([lukeState]);
	const [ state, dispatch ] = useReducer(reducer.bind(null, jedi, setJedi), lukeState);

	return <>
		<Jedi jedi={state}/><br/>
		<button
			type="button"
			onClick={() => {
				if (jedi.length === 1) return;
				const index = jedi.indexOf(state) >= jedi.length - 1 ? 0 : jedi.indexOf(state) + 1;
				dispatch({ type: ACTIONS.GET_CURRENT_JEDI, payload: jedi[index] });
			}}
		>Next jedi</button>
		<button
			type="button"
			onClick={() => {
				if (jedi.length === 1) return;
				const index = jedi.indexOf(state) <= 0 ? jedi.length - 1 : jedi.indexOf(state) - 1;
				dispatch({ type: ACTIONS.GET_CURRENT_JEDI, payload: jedi[index] });
			}}
		>Prev jedi</button><br/>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.FINISH_TRAINING })}>Finish Training</button><br/>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.JOIN_DARK_SIDE })}>Join the Dark Side</button><br/>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.SET_JOB, job: "Moisture Farmer" })}>Set job to moisture farmer</button><br/>
		<button type="button" onClick={() => {
			if (jedi.length <= 0) return;
			const idx = jedi.indexOf(state);
			jedi.splice(idx, 1);
			setJedi(jedi);
			dispatch({ type: ACTIONS.GET_CURRENT_JEDI, payload: {} });
		}}>Remove Jedi</button>
		<ListJedi jedi={jedi} current={jedi.indexOf(state)}/>
		<NewJedi addJedi={j => {
			dispatch({ type: ACTIONS.GET_CURRENT_JEDI, payload: j });
			setJedi([...jedi, j]);
		}}/>
		</>;
}

export default App;
