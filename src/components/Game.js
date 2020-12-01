import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const style = {
	width: '200px',
	margin: '10px auto',
	color: 'white',
	fontWeight: 'bold',
};
const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		// If user click an occupied square or if game is won, return
		if (winner || boardCopy[i]) return;
		// Put an X or an O in the clicked square
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	// const jumpTo = () => {};

	const renderMoves = () => (
		<button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
	);

	return (
		<>
			<div>
				<h1>Tic Tac Toe</h1>
				<h3>Built purely in React</h3>
			</div>
			<div className='board'>
				<Board squares={board} onClick={handleClick} />
			</div>
			<div style={style}>
				<p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
				{renderMoves()}
			</div>
		</>
	);
};

export default Game;
