import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(9);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		console.log(response.data);
		const totalCount = (response.headers['x-total-count']);
		setTotalPages(getPageCount(totalCount, limit));
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [])

	function createPost(newPost) {
		setPosts([...posts, newPost]);
		console.log(newPost);
		console.log(posts);
		setModal(false)
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	function changePage(page) {
		setPage(page);
		fetchPosts(limit, page)
	}

	return (
		<div className="App">
			<div className="wrapper">
				<main className="main">
					<section className="posts">
						<div className="posts__container">
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
								: <PostList remove={removePost} setModal={setModal} posts={sortedAndSearchedPosts} title={'Recent posts'} />
							}
							<Pagination page={page} changePage={changePage} totalPages={totalPages} />
						</div>
					</section>
				</main>
			</div>

		</div>
	);
}

export default Posts;
