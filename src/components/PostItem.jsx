import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {
  return (
	  <div className="post">
		  <div className="post__content">
			  <h2 className="post__title">{props.post.id}. {props.post.title}</h2>
			  <div className="post__text">{props.post.body}</div>
		  </div>
		  <div className="post__buttons">
			  <MyButton onClick={() => props.remove(props.post)} className="post__button">Delete</MyButton>
		  </div>
	  </div>
  )
}
