import React from 'react';

const Todo = ({ id, task, removeTodo }) => {
	const remove = () => removeTodo(id);

	return (
		<div>
			{task}
			<button onClick={remove}>X</button>
		</div>
	);
};

export default Todo;
