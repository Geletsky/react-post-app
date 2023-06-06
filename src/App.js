import React, { useState } from "react";
import './components/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'b', body: 'Description 1' },
		{ id: 2, title: 'a', body: 'Description 2' },
		{ id: 3, title: 'c', body: 'Description 3' },
	])

	const [selectedSort, setSelectedSort] = useState('')

	function createPost(newPost) {
		setPosts([...posts, newPost])
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	function sortPosts(sort) {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) =>a[sort].localeCompare(b[sort])))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<div style={{ marginTop: '15px' }}>
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
			{posts.length !== 0
				? <PostList remove={removePost} posts={posts} title={'Recent posts'} />
				: <h1 style={{ textAlign: 'center' }}>Posts not found</h1>}
		</div>
	);
}

export default App;
