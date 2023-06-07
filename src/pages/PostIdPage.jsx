import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
export default function PostIdPage() {
	const params = useParams();
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data);
	})
	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div>
			<div>PostIdPage from ID = {params.id}</div>
			{isLoading
				? <Loader />
				: <div>{post.id}. {post.title}</div>}
			<h1>
				Comments
			</h1>
			{isCommentsLoading
				? <Loader />
				: <div>
					{comments.map(comment => 
						<div style={{marginTop: '15px'}}>
							<h5>{comment.email}</h5>
							<div>{comment.body}</div>
						</div>
					)}
				</div>}
		</div>
	)
}
