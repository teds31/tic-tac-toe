import React from 'react';
import Square from './Square';

const style = {
	border: '4px solid white',
	borderRadius: '10px',
	minWidth: '250px',
	maxWidth: '350px',
	minHeight: '250px',
	maxHeight: '350px',
	margin: '0 auto',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => {
	return (
		<div style={style}>
			{squares.map((square, i) => {
				return <Square key={i} value={square} onClick={() => onClick(i)} />;
			})}
		</div>
	);
};

export default Board;
