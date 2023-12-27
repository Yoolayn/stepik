import { JediContext } from "./jediContext";
import { useContext } from "react";

function JediControls() {
	const { dispatch, ACTIONS } = useContext(JediContext);

	return <>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.FINISH_TRAINING })}>Finish Training</button>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.JOIN_DARK_SIDE })}>Join the Dark Side</button>
		<button type="button" onClick={() => dispatch({ type: ACTIONS.SET_JOB, job: "moisture farmer" })}>Set Job to moisture farmer</button>
	</>;
}

export default JediControls;
