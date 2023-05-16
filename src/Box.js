import React from 'react';

const Box = ({ id, width, height, color, removeBox }) => {
	const remove = () => removeBox(id);

	return (
		<div>
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: color,
				}}
			></div>
			<button onClick={remove}>X</button>
		</div>
	);
};

export default Box;
