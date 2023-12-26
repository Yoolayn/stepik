"use client";

import { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 };
		case 'DECREMENT':
			return { value: state.value - 1 };
		case 'ADD':
			return { value: state.value + action.amount };
		case 'SUBTRACT':
			return { value: state.value - action.amount };
		case 'SET':
			return { value: action.value };
		default:
			return state;
	}
}

function Counter() {
	const [ state, dispatch ] = useReducer(reducer, { value: 0 });

	return <>
			Licznik: {state.value}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
			<button onClick={() => dispatch({ type: 'ADD', amount: 5 })}>add 5</button>
			<button onClick={() => dispatch({ type: 'SUBTRACT', amount: 3 })}>subtract 3</button>
			<button onClick={() => dispatch({ type: 'SET', value: 10 })}>set to 10</button>
		</>;
}

export default Counter;
