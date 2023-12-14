export default function ColorPicker(props) {
	return (
		<div>
			<input type="color" onChange={e => {
				props.setColor({color: e.target.value});
			}} />
		</div>
	);
}
