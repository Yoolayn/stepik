function FormToDoMessages({ messages }) {
	return (
		<ul>
			{messages.map((message, idx) => {
				return <li key={'message_idx_' + idx}>
					<p>type: {message.type}</p>
					<p>content: {message.contents}</p>
					</li>;
			})}
		</ul>
	);
}

export default FormToDoMessages;
