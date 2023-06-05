import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title 1', body: 'Description 1' },
		{ id: 2, title: 'Title 2', body: 'Description 2' },
		{ id: 3, title: 'Title 3', body: 'Description 3' },
	])

	return (
		<div className="App">
			<PostList posts={posts} title={'Недавние посты'}/>
		</div>
	);
}

export default App;
