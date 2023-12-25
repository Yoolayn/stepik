"use client";

import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function Login() {

	const initialValues = {
		login: "",
		password: "",
	};

	const onSubmit = (values) => {
		if (
			values.login === "login" &&
			values.password === "securepassword"
		) {
			alert("login successful!");
		} else {
			alert("login failed!");
		}
	};

	const validationSchema = Yup.object({
		login: Yup.string().required("login is required"),
		password: Yup.string().required("password is required")
	});

	return <>
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				{() => (
					<Form>
						<div className="Field">
							<Field name="login" placeholder="Login"/>
							<div>
								<ErrorMessage name="login" component="span"/>
							</div>
						</div>
						<div className="Field">
							<Field name="password" placeholder="Password" type="password"/>
							<div>
								<ErrorMessage name="password" component="span"/>
							</div>
						</div>
						<button type="submit">Login</button>
					</Form>
				)}
		</Formik>
		</>;
}

export default Login;
