import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);

	const addBox = (box) => {
		setBoxes((boxes) => [...boxes, box]);
	};

	const removeBox = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};

	const boxComponents = boxes.map((box) => (
		<Box
			key={box.id}
			id={box.id}
			width={box.width}
			height={box.height}
			color={box.color}
			removeBox={removeBox}
		/>
	));

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			{boxComponents}
		</div>
	);
};

export default BoxList;
