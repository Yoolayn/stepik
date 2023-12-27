import { useContext } from "react";
import { JediContext } from "./jediContext";

function ListControls() {
	const { state, jediList, setJediList, dispatch, ACTIONS } = useContext(JediContext);
	const setNew = (newState) => {
		return { type: ACTIONS.GET_CURRENT_JEDI, payload: newState };
	};

	function next() {
		const currIdx = jediList.indexOf(state);
		const newIdx = currIdx >= jediList.length - 1 ? 0 : currIdx + 1;
		const newState = jediList[newIdx];
		dispatch(setNew(newState));
	}

	function prev() {
		const currIdx = jediList.indexOf(state);
		//HACK: right after creating one and pressing previuos, the idx isn't
		//found, but we need to go to before the last one anyway
		if (currIdx === -1) {
			dispatch(setNew(jediList[jediList.length - 2]));
			return;
		}
		const newIdx = currIdx <= 0 ? jediList.length - 1 : currIdx - 1;
		const newState = jediList[newIdx];
		dispatch(setNew(newState));
	}

	function deleteJedi() {
		const idx = jediList.indexOf(state);
		jediList.splice(idx, 1);
		setJediList(jediList);
		dispatch(setNew({}));
	}

	return <>
			<button type="button" onClick={next}>Next Jedi</button>
			<button type="button" onClick={prev}>Prev Jedi</button><br/>
			<button type="button" onClick={deleteJedi}>Delete Jedi</button>
		</>;
}

export default ListControls;
