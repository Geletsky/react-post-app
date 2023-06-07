import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostItem(props) {
	const router = useNavigate();
	return (
		<div className="post">
			<div className="post__content">
				<h2 className="post__title">{props.post.id}. {props.post.title}</h2>
				<div className="post__text">{props.post.body}</div>
			</div>
			<div className="post__buttons">
				<MyButton onClick={() => router(`/posts/${props.post.id}`)} className="post__button">Open</MyButton>
				<MyButton onClick={() => props.remove(props.post)} className="post__button">Delete</MyButton>
			</div>
		</div>
	)
}
