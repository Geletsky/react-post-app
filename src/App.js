import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title 1', body: 'Description 1' },
		{ id: 2, title: 'Title 2', body: 'Description 2' },
		{ id: 3, title: 'Title 3', body: 'Description 3' },
	])

	function createPost(newPost) {
		setPosts([...posts, newPost])
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			{posts.length !== 0
				? <PostList remove={removePost} posts={posts} title={'Recent posts'} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>}

		</div>
	);
}

export default App;
