import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function CommentsList({ comments, setComments }) {
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/comments")
			.then(resp => resp.data)
			.then(arr => setComments(arr));
	}, [setComments]);
	return <ul>
			{ comments.map(comment => (
				<li key={uuidv4()}>
					{comment.email} {comment.name}
				</li>
			)) }
		</ul>;
}

export default CommentsList;
