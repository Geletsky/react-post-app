import React from 'react'
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

export default function PostFilter({ filter, setFilter }) {
	return (
		<div style={{ margin: '15px 0px', display: 'flex', alignItems: 'center', gap: '10px' }}>
			<MyInput
				value={filter.query}
				onChange={event => setFilter({ ...filter, query: event.target.value })}
				placeholder={'Find a post...'}
			/>
			<MySelect
				value={filter.sort}
				selected={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue={'Sort by:'}
				options={[
					{ value: 'title', body: "By name" },
					{ value: 'body', body: "By description" },
				]}
			/>
		</div>
	)
}
