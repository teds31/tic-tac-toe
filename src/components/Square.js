import React from 'react';

const style = {
	background:
		'linear-gradient(to top, #ACB6E5, #74ebd5)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

	border: '2px solid darkblue',
	fontSize: '30px',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none',
};
const Square = ({ value, onClick }) => {
	return (
		<>
			<button style={style} onClick={onClick}>
				{value}
			</button>
		</>
	);
};

export default Square;
