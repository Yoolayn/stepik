import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function NewJedi({ addJedi }) {

	function submit(values, { resetForm }) {
		const { firstName, lastName, job, side, type, weapon } = values;
		const jedi = {
			firstName,
			lastName,
			job,
			side,
			weapons: {
				[type]: weapon
			}
		};
		addJedi(jedi);
		resetForm();
	}

	const initialValues = {
		firstName: "",
		lastName: "",
		job: "",
		side: "Light",
		type: "blaster",
		weapon: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("name is required"),
		lastName: Yup.string().required("surname is required"),
		job: Yup.string().required("job is required"),
		side: Yup.string().required("side is required"),
		type: Yup.string().required("weapon type is required"),
		weapon: Yup.string().required("weapon name is required"),
	});

	return <>
			<Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
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
									<option value="Light">light</option>
									<option value="Dark">dark</option>
									<option value="Gray">gray</option>
								</Field>
								<div>
									<ErrorMessage name="side" component="span"/>
								</div>
							</div>
							<div>
								<Field name="type" as="select">
									<option value="blaster">blaster</option>
									<option value="lightsaber">lightsaber</option>
								</Field>
								<div>
									<ErrorMessage name="type" component="span"/>
								</div>
							</div>
							<div>
								<Field name="weapon" placeholder="weapon name/lightsaber color"/>
								<div>
									<ErrorMessage name="weapon" component="span"/>
								</div>
							</div>
							<button type="submit">Add Jedi</button>
						</Form>
					</>
				)}
		</Formik>
		</>;
}

export default NewJedi;
