import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CommentForm({ setComments }) {

	const initialValues = {
		name: "",
		email: "",
		body: ""
	};

	function submit(values, { resetForm }) {
		axios.post("https://jsonplaceholder.typicode.com/posts", {
			title: values.name + " " + values.email,
			body: values.body,
			userId: 1,
		})
		.then(resp => {
			console.log(resp);
			resetForm();
			axios.get("https://jsonplaceholder.typicode.com/comments")
				.then(resp => resp.data)
				.then(arr => setComments([values, ...arr]));
		});
	}

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(2, "name has to be at least of length more than one")
			.max(19, "name has to be at most length less than 20")
			.required("name is required"),
		email: Yup.string().required("email is required").email("this is not a valid email"),
		body: Yup.string().optional(),
	});

	return <>
		<Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
			{() => (
				<Form>
					<div className="Field">
						<Field name="name" placeholder="name"/>
						<div>
							<ErrorMessage name="name" component="spam"/>
						</div>
					</div>
					<div className="Field">
						<Field name="email" placeholder="email"/>
						<div>
							<ErrorMessage name="email" component="spam"/>
						</div>
					</div>
					<div className="Field">
						<Field name="body" placeholder="body" as="textarea"/>
						<div>
							<ErrorMessage name="body" component="spam"/>
						</div>
					</div>
					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</Form>
				)}
			</Formik>
		</>;
}

export default CommentForm;
