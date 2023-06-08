import React from 'react'
import PostItem from "./PostItem";
import MyButton from './UI/button/MyButton';

export default function PostList({ posts, title, remove, setModal }) {
	if (!posts.length) {
		return (
			<h1 className='title' style={{ textAlign: 'center' }}>Posts not found</h1>
		)
	}

	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
				<h1 className='title'>
					{title}
				</h1>
				<MyButton onClick={() => setModal(true)}>
					Create a new post
				</MyButton>
			</div>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px'}}>
				{posts.map((post, index) =>
					<PostItem remove={remove} number={index + 1} post={post} key={post.id} />
				)}
			</div>

		</div>
	)
}
