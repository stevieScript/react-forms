import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		width: '',
		height: '',
		color: '',
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='width'>Width</label>
			<input
				id='width'
				name='width'
				type='text'
				value={formData.width}
				onChange={handleChange}
			/>
			<label htmlFor='height'>Height</label>
			<input
				id='height'
				name='height'
				type='text'
				value={formData.height}
				onChange={handleChange}
			/>
			<label htmlFor='color'>Color</label>
			<input
				id='color'
				name='color'
				type='text'
				value={formData.color}
				onChange={handleChange}
			/>
			<button>Add Box</button>
		</form>
	);
};

export default NewBoxForm;
