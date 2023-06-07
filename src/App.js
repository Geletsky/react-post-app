import React, { useEffect, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const posts = await PostService.getAll();
		setPosts(posts)
	})

	useEffect(() => {
		fetchPosts()
	}, [])

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
			{postError &&
				<h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'red' }}>An error occurred with the operation of the server</h1>
			}
			{isPostsLoading
				? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Recent posts'} />
			}
		</div>
	);
}

export default App;
