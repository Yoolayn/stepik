import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function Create({ setUser }) {

	const initialValues = {
		name: "",
		email: "",
		password: "",
		choice: "",
		citizenship: "",
		agreed: false
	};

	const onSubmit = (values) => {
		localStorage.setItem("user", JSON.stringify(values));
		setUser(values);
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("name is required"),
		email: Yup.string().required("email is required").email("email isn't valid"),
		password: Yup.string().required("password is required")
	});

	return (<>
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{() => (
				<Form>
					<div className="Field">
						<Field name="name" placeholder="name"/>
						<div>
							<ErrorMessage name="name" component="span"/>
						</div>
					</div>
					<div className="Field">
						<Field name="email" placeholder="email"/>
						<div>
							<ErrorMessage name="email" component="span"/>
						</div>
					</div>
					<div className="Field">
						<Field name="password" placeholder="password" type="password"/>
						<div>
							<ErrorMessage name="password" component="span"/>
						</div>
					</div>
					<div className="Field">
						<Field name="citizenship" placeholder="citizenship"/>
						<div>
							<ErrorMessage name="citizenship" component="span"/>
						</div>
					</div>
					<div className="Field">
						<label>
							<Field name="choice" value="red" type="radio"/>
							Red
						</label><br/>
						<label>
							<Field name="choice" value="blue" type="radio"/>
							Blue
						</label><br/>
						<label>
							<Field name="choice" value="green" type="radio"/>
							Green
						</label><br/>
					</div>
					<div className="Field">
						<label>
							<Field name="agreed" type="checkbox" required/>
							I agree to terms and conditions
						</label>
					</div>
				<button type="submit">Create account</button>
				<button type="reset">Reset</button>
				</Form>
			)}
		</Formik>
		</>);
}

export default Create;
