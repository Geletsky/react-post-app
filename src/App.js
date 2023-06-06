import React, { useState, useMemo } from "react";
import './components/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'b', body: 'Description 1' },
		{ id: 2, title: 'a', body: 'Description 2' },
		{ id: 3, title: 'c', body: 'Description 3' },
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}, [selectedSort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, sortedPosts])

	function createPost(newPost) {
		setPosts([...posts, newPost])
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	function sortPosts(sort) {
		setSelectedSort(sort);
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<div style={{ margin: '15px 0px', display: 'flex', alignItems: 'center', gap: '10px' }}>
				<MyInput
					value={searchQuery}
					onChange={event => setSearchQuery(event.target.value)}
					placeholder={'Find a post...'}
				/>
				<MySelect
					value={selectedSort}
					selected={sortPosts}
					defaultValue={'Sort by:'}
					options={[
						{ value: 'title', body: "By name" },
						{ value: 'body', body: "By description" },
					]}
				/>
			</div>
			{sortedAndSearchedPosts.length !== 0
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Recent posts'} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>}
		</div>
	);
}

export default App;
