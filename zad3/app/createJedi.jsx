import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useContext } from "react";
import { JediContext } from "./jediContext";

function CreateJedi() {

	const { setJediList, dispatch, ACTIONS } = useContext(JediContext);

	function submit(values, { resetForm }) {
		const { firstName, lastName, job, side, type, weapon } = values;
		const newJedi = {
			firstName,
			lastName,
			job,
			side,
			weapons: {
				[type]: weapon
			}
		};
		setJediList(o => [...o, newJedi]);
		dispatch({ type: ACTIONS.GET_CURRENT_JEDI, payload: newJedi });
		resetForm();
	}

	const initialValues = {
		firstName: "",
		lastName: "",
		job: "",
		side: "Light",
		type: "blaster",
		weapon: ""
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("name is required"),
		lastName: Yup.string().required("surname is required"),
		job: Yup.string().required("job is required"),
		side: Yup.string().required("side is required"),
		type: Yup.string().required("weapon type is required"),
		weapon: Yup.string().required("weapon name is required")
	});

	return <Formik
		initialValues={initialValues}
		onSubmit={submit}
		validationSchema={validationSchema}
	>
			{() => (
				<>
					<h2>Add new jedi</h2>
					<Form>
						<div>
							<Field name="firstName" placeholder="name"/>
							<div>
								<ErrorMessage name="firstName" component="span"/>
							</div>
						</div>
						<div>
							<Field name="lastName" placeholder="surname"/>
							<div>
								<ErrorMessage name="lastName" component="span"/>
							</div>
						</div>
						<div>
							<Field name="job" placeholder="job"/>
							<div>
								<ErrorMessage name="job" component="span"/>
							</div>
						</div>
						<div>
							<Field name="side" as="select">
								<option value="Light">Light</option>
								<option value="Dark">Dark</option>
								<option value="Gray">Gray</option>
							</Field>
						</div>
						<div>
							<Field name="type" as="select">
								<option value="blaster">blaster</option>
								<option value="lightsaber">lightsaber</option>
							</Field>
						</div>
						<div>
							<Field name="weapon" placeholder="weapon name/lightsaber color"/>
							<div>
								<ErrorMessage name="weapon" component="span"/>
							</div>
						</div>
						<button type="submit">Add Jedi</button>
						<button type="reset">Reset</button>
					</Form>
				</>
			)}
		</Formik>;
}

export default CreateJedi;
