import { createContext, useReducer, useState } from "react";

const ACTIONS = {
	GET_CURRENT_JEDI: "get_current_jedi",
	FINISH_TRAINING: "finish_training",
	JOIN_DARK_SIDE: "join_dark_side",
	SET_JOB: "set_job",
};

const lukeState = {
	firstName: "Luke",
	lastName: "Skywalker",
	job: "moisture farmer",
	side: "light",
	weapons: {
		blaster: "DL-42"
	}
};

function reducer(setJediList, state, action) {
	switch(action.type) {
		case ACTIONS.GET_CURRENT_JEDI: {
			return action.payload;
		}
		case ACTIONS.SET_JOB: {
			const newState = { ...state, job: action.job };
			setJediList(o => {
				const idx = o.indexOf(state);
				o[idx] = newState;
				return o;
			});
			return newState;
		}
		case ACTIONS.FINISH_TRAINING: {
			const newState = { ...state, job: "Jedi Knight", weapons: { lightsaber: "Blue" } };
			setJediList(o => {
				const idx = o.indexOf(state);
				o[idx] = newState;
				return o;
			});
			return newState;
		}
		case ACTIONS.JOIN_DARK_SIDE: {
			const newState = { ...state, job: "Sith", side: "Dark", weapons: { lightsaber: "Red" } };
			setJediList(o => {
				const idx = o.indexOf(state);
				o[idx] = newState;
				return o;
			});
			return newState;
		}
		default: {
			return state;
		}
	}
}

export const JediContext = createContext();

export const JediContextProvider = ({ children }) => {
	const [ jediList, setJediList ] = useState([lukeState]);
	const [ state, dispatch ] = useReducer(
		reducer.bind(null, setJediList),
		lukeState
	);

	const contextValue = {
		jediList,
		setJediList,
		state,
		dispatch,
		ACTIONS
	};

	return <JediContext.Provider value={contextValue}>{children}</JediContext.Provider>;
};
