import React, { useState, useMemo } from "react";
import './components/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'b', body: 'Description 1' },
		{ id: 2, title: 'a', body: 'Description 2' },
		{ id: 3, title: 'c', body: 'Description 3' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	function createPost(newPost) {
		setPosts([...posts, newPost])
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{sortedAndSearchedPosts.length !== 0
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Recent posts'} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>}
		</div>
	);
}

export default App;
