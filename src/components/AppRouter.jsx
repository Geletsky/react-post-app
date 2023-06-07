import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
export default function AppRouter() {
  return (
	  <Routes>
		  <Route element={<About />} path="/about" />
		  <Route element={<PostIdPage />} exact path="/posts/:id" />
		  <Route element={<Posts />} exact path="/posts" />
		  <Route element={<Error />} path="*" />
	  </Routes>
  )
}
