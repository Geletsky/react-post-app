import React, { useState } from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title 1', body: 'Description 1' },
		{ id: 2, title: 'Title 2', body: 'Description 2' },
		{ id: 3, title: 'Title 3', body: 'Description 3' },
	])

	return (
		<div className="App">
			{posts.map(post => <PostItem post={post} key={post.id} />)}
		</div>
	);
}

export default App;
