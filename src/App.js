import React, { useState } from "react";
import './components/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'b', body: 'Description 1' },
		{ id: 2, title: 'a', body: 'Description 2' },
		{ id: 3, title: 'c', body: 'Description 3' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	function createPost(newPost) {
		setPosts([...posts, newPost]);
		setModal(false)
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>
				Create a new post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Creating a post</h2>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Recent posts'} />
		</div>
	);
}

export default App;
