import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create }) {
	const [post, setPost] = useState({ title: '', body: '' })


	function addNewPost(event) {
		event.preventDefault();
		const newPost = { ...post, id: Date.now() }
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<form>
			<MyInput
				style={{ marginBottom: '10px' }}
				value={post.title}
				onChange={event => setPost({ ...post, title: event.target.value })}
				type="text"
				placeholder="Title of the post"
			/>
			<MyInput
				value={post.body}
				onChange={event => setPost({ ...post, body: event.target.value })}
				type="text"
				placeholder="Description of the post"
			/>
			<MyButton style={{ display: 'block', margin: '15px auto 0px auto' }} onClick={addNewPost}>Create</MyButton>
		</form>
	)
}
