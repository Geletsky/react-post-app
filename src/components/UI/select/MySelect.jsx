import React from 'react';
import cl from './MySelect.module.css';

export default function MySelect({ options, defaultValue, value, selected }) {
	return (
		<select className={cl.mySelect} value={value} onChange={event => selected(event.target.value)}>
			<option disabled value="">{defaultValue}</option>
			{options.map(option =>
				<option key={option.value} value={option.value}>{option.body}</option>)}
		</select>
	)
}
